const asyncHandler = require("express-async-handler")
const Product = require("../models/product")

// Method: GET
// Objetivo: retornar os produtos do usuário
const seeProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user.id })

    res.render("products",{products: products})
})
//Método: POST
//Objetivo: criar um novo produto
const createProduct = asyncHandler(async (req, res) => {
    const { name, price, amount } = req.body
    const existingProduct = await Product.findOne({ name, user: req.user.id })
    if (existingProduct){
        return res.render("insertproducts", {error: "Um produto com esse mesmo nome já existe", name, price, amount})
    }
    const newProduct = await Product.create({
        name,
        price,
        amount,
        user: req.user.id // Aqui adicionamos o ID do usuário
    })
    console.log("Um item foi criado")

    res.redirect("/products")
})
//Método: GET
//Objetivo: renderizar a tela de inserir produtos
const insertProduct = (req, res)=>{
    res.render("insertProducts", {error: null, name: "", price: "", amount: ""})
}

//Método: DELETE
//Objetivo: Deletar o produto selecionado.

const deleteProduct=  (async(req, res)=>{
    const {id} = req.params
    const item = await Product.findByIdAndDelete(id)
    console.log("Um item foi deletado")
    res.redirect("/products")
})

module.exports = { seeProducts, createProduct, insertProduct, deleteProduct}
