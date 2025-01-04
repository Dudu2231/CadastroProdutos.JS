const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const dotenv = require("dotenv").config()
const asyncHandler = require("express-async-handler")


// Method: GET
// Objetivo: retornar a Home
// Pública
const home = (req, res) => {
    res.render("home")
}

// Method: GET
// Objetivo: retornar a tela de login
// Pública
const login = (req, res) => {
    res.render("login", {error: null})
}

// Method: GET
// Objetivo: retornar a tela de registro
// Pública
const register = (req, res)=>{
    res.render("register", {error: null})
}

// Method: POST
// Objetivo: fazer login do usuário
// Pública
const loginUser = asyncHandler(async (req, res) => {
  	const { email, password } = req.body

	//tentando encontrar o email na base dados
    const user = await User.findOne({email})
	//lógica para checar se o user já está registrado
    if (!user) {
        res.render("login", {error: "Usuário não cadastrado, verifique o email fornecido, ou registre-se"})
    }

	// Compara a senha fornecida com a senha hasheada
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!isMatch) {
        res.render("login", {error: "Certifique-se que a senha está correta"}).status(401)
    }    
    // Gera o token JWT se as credenciais estiverem corretas
    const accessToken = jwt.sign(
        { user: 
          { email: user.email, id: user._id }
           
        },
        process.env.ACCESS_SECRET_TOKEN,
        { expiresIn: "1h" }
    )
    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 3600000 })
    res.redirect("/products")

})

// Method: POST
// Objetivo: registrar um novo usuário
// Pública
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        res.render("register", {error: "Certifique-se que a senha está correta"}).status(401)
    }

    // Verifica se o usuário já existe
    const userExists= await User.findOne({email})
    if (userExists){
        return res.render("register", {error: "Email já em uso"})
    } 

    //hasheando a senha para salvar no banco de dados    
    const hashedPassword = await bcrypt.hash(password, 10)

    //mandando o user para o banco de dados    
    const newUser = await User.create({ name, email, password: hashedPassword })

    res.redirect("/login")

})

module.exports = { home, login, loginUser, registerUser, register}
