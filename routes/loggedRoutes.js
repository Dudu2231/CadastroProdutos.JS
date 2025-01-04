const express = require("express")
const router = express.Router()
const validateToken = require("../middleware/validationToken")
const { seeProducts, createProduct, insertProduct, deleteProduct } = require("../controller/clientController")


router.get("/products", validateToken , seeProducts)
router.delete("/products/delete/:id", validateToken, deleteProduct)
router.get("/insertproduct", validateToken, insertProduct)
router.post("/insertproduct", validateToken, createProduct)



module.exports = {router}