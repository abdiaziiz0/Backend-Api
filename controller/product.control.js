const ProductModel = require("../model/product");
const cloudinary = require("../config/cloudinary");

const NewProduct = async (req, res) => {
    try {
        const { ProductTitle, ProductPrice, ProductDiscrebtion } = req.body;
        const ProductGenerator = Math.floor(Math.random() * 1000000);
        const CloudImage = await cloudinary.uploader.upload(req.file.path);
        const CreatProduct = await ProductModel.create({
            ProductTitle,
            ProductPrice,
            ProductDiscrebtion,
            ProductImages: CloudImage.secure_url,
            ProductImagesId: CloudImage.public_id,
            ProductCode: `REDCART - ${ProductGenerator}`

        })
        res.status(201).json({
            message: "Product Created Successfully!",
            data: CreatProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed to create product",
            data: error
        });
    }
};

const CreateProduct = async (req, res) => {
    try {
        const AllProduct = await ProductModel.find();
        res.status(200).json({
            message: "All Products Retrieved Successfully!",
            data: AllProduct
        })

    } catch (error) {
        res.status(400).json({
            message: "Failed to retrieve Products",
            data: error
        })
    }
};

const GetProductById = async (req, res) => {
    try {
        const ProductId = await ProductModel.findById(req.params.id)
        res.status(200).json({
            message: "Product by ID retrieved successfully!",
            data: ProductId
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed to retrieve Product by ID",
            data: error
        })
    }
};

const ProductUpdate = async (req, res) => {
    try {
        const { ProductTitle, ProductPrice, ProductDiscrebtion } = req.body;
        const UpdateProduct = await ProductModel.findByIdAndUpdate(req.params.id,
            { ProductTitle, ProductPrice, ProductDiscrebtion },
            { new: true }
        )
        res.status(200).json({
            message: "Product updated successfully!",
            data: UpdateProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed to update the product!",
            data: error
        })
    }
};

const ProductDelete = async (req, res) => {
    try {
        const DeleteProduct = await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Product deleted successfully!",
            data: DeleteProduct
        })
    } catch (error) {
        
        res.status(400).json({
            message: "Failed to delete the product!",
            data: error
        })
    }
}



module.exports = { NewProduct, CreateProduct, GetProductById, ProductUpdate, ProductDelete };