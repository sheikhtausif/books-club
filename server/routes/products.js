import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
} from "../controllers/products";

import express from "express";
const router = express.Router();

import { Product } from "../models";
import { advancedResults } from "../middlewares/advancedResults";
import { userAuth, authorize } from "../middlewares/auth-guard";
let upload = require("../config/multer");

// protect, admin,
router
    .route("/")
    .get(advancedResults(Product), getProducts)
    .post(upload.any(), createProduct);

router
    .route("/:id")
    .get(getProductById)
    .delete(deleteProduct)
    .put(upload.any(), updateProduct);

export default router;
