const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema(
   {
    ProductImages:{
        type: String,
    },
    ProductImagesId:{
        type: String,
    },
    ProductTitle: {
        type: String
    },
    ProductPrice: {
        type: Number
    },
    ProductDiscrebtion: {
        type: String
    },
    ProductCode: {
        type: String
    }
   },
    {timestamps: true}
)

const ProductModel = mongoose.model("Product", ProductSchema)
module.exports = ProductModel