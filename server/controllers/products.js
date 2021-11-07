import asyncHandler from "express-async-handler";
import { Product } from "../models";
import mongoose from "mongoose";
import async from "async";
import fs from "fs";
import util from "util";
import { uploadFileS3, getFileStreamS3, deleteFileS3 } from "../config/s3";
const unlinkFile = util.promisify(fs.unlink);

/**
 * @description Fetch all products
 * @api /api/products
 * @access Public
 * @type GET
 */

const getProducts = asyncHandler(async (req, res) => {
    // console.log('req:', req.query)
    res.status(200).json(res.advancedResults);
});

/**
 * @description Fetch single product
 * @api /api/products/:id
 * @access Public
 * @type GET
 */
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id }).populate("category");

    if (product) {
        res.json({ data: product, success: true });
    } else {
        res.status(200).json({
            success: false,
            message: "Product not found",
            data: {},
        });
    }
});

/**
 * @description Delete a product
 * @api /api/products/:id
 * @access Private/Admin
 * @type DELETE
 */

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    async.series(
        [
            (cb) => {
                Product.deleteOne({ _id: id }).exec((err, product) => {
                    if (err) {
                        return cb(err);
                    }
                    cb();
                });
            },
        ],
        (err) => {
            if (err) {
                res.json({ success: false, err, data: null, message: "Error occured" });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Product removed",
                data: [],
            });
        }
    );
});

/**
 * @description Create a product
 * @api /api/products
 * @access Private/Admin
 * @type POST
 */

const createProduct = asyncHandler(async (req, res) => {
    let formData = JSON.parse(req.body.data);
    const {
        user,
        title,
        description,
        images,
        city,
        category,
        language,
    } = formData;
    // console.log("object", user)

    // console.log(req.files, "file abs");

    let array = [];
    async.series(
        [
            (cb) => {
                const product = new Product();
                product.user = mongoose.Types.ObjectId(user);
                product.title = title;
                product.description = description;
                product.images = images;
                product.city = city;
                product.category = category;
                product.language = language;

                product.save((err, product) => {
                    if (err) {
                        cb(err);
                    }

                    req.product = product;
                    cb();
                });
            },
            (cb) => {
                if (req.files && req.files.length) {
                    async.eachSeries(
                        req.files,
                        (file, callback) => {
                            uploadFileS3(file)
                                .then((res) => {
                                    array.push(res.key);
                                    unlinkFile(file.path);
                                    callback();
                                })
                                .catch((err) => {
                                    callback(err);

                                    return;
                                });
                        },
                        (err) => {
                            if (err) {
                                cb(err);
                                return;
                            }
                            req.product.images = array;
                            req.product.save((err, product) => {
                                if (err) {
                                    cb(err);
                                }

                                cb();
                            });
                        }
                    );
                } else {
                    cb();
                }
            },
        ],
        (err) => {
            if (err) {
                res.status(200).json({ success: false, err, data: null });
                return;
            }

            res.status(201).json({
                success: true,
                product: req.product,
                data: [],
            });
        }
    );
});

/**
 * @description Update a product
 * @api /api/products/:id
 * @access Private/Admin
 * @type PUT
 */

const updateProduct = asyncHandler(async (req, res) => {
    let formData = JSON.parse(req.body.data);
    const {
        user,
        title,
        images,
        description,
        category,
        city,
        language,
    } = formData;

    let array = [];
    async.series(
        [
            (cb) => {
                Product.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }).exec(
                    (err, product) => {
                        if (err) {
                            cb(err);
                            return;
                        }

                        if (product) {
                            product.title = title;
                            product.description = description;
                            product.images = images;
                            product.city = city;
                            product.category = category;
                            product.language = language;

                            product.save((err, doc) => {
                                if (err) {
                                    cb(err);
                                    return;
                                }
                                req.product = doc;
                                cb();
                            });
                        } else {
                            cb();
                        }
                    }
                );
            },
            (cb) => {
                if (req.files && req.files.length) {
                    async.eachSeries(
                        req.files,
                        (file, callback) => {
                            uploadFileS3(file)
                                .then((res) => {
                                    array.push(res.key);
                                    unlinkFile(file.path);
                                    callback();
                                })
                                .catch((err) => {
                                    callback(err);
                                    return;
                                });
                        },
                        (err) => {
                            if (err) {
                                cb(err);
                                return;
                            }

                            if (array && array.length) {
                                req.product.images = array;
                                // array.forEach((img) => {
                                // req.product.images.push(img);
                                // });
                            }

                            req.product.save((err, product) => {
                                if (err) {
                                    cb(err);
                                }
                                cb();
                            });
                        }
                    );
                } else {
                    cb();
                }
            },
        ],
        (err) => {
            if (err) {
                res.json({ success: false, err, data: [] });
                return;
            }
            res.status(201).json({ success: true, data: req.product });
        }
    );
});



export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
};
