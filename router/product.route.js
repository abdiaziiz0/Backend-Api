const express = require("express");
const router = express.Router();
const {NewProduct, CreateProduct, GetProductById, ProductUpdate, ProductDelete} = require("../controller/product.control");
const {upload} = require("../config/multer");

router.route("/NewProduct").post(upload, NewProduct);
router.route("/GetAllProduct").get(upload, CreateProduct);
router.route("/GetProductById/:id").patch(upload, GetProductById);
router.route("/ProductUpdate/:id").patch(upload, ProductUpdate);
router.route("/ProductDelete/:id").delete(upload, ProductDelete)


module.exports = router;

