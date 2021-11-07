import { Schema, model } from "mongoose";

const productSchema = Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: "User", },
        title: { type: String, required: true, },
        images: [{ type: String, },],
        category: { type: String, required: true, },
        description: { type: String, required: true, },
        city: { type: String, required: true },
        language: { type: String, required: true, default: "english", },
        isAvailable: { type: Boolean, default: true, },
    },
    {
        timestamps: true, versionKey: false,
        toJSON: { virtuals: true },
    },
);

productSchema.pre("remove", async function (next) {
    await this.model("Review").deleteMany({ productId: this._id });

    next();
});

productSchema.virtual("Reviews", {
    ref: "Review",
    localField: "_id",
    foreignField: "productId",
    justOne: false,
});

const Product = model("Product", productSchema);

export default Product;
