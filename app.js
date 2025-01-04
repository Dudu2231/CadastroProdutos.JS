//inicializando importações
const express = require("express")
const connectDb = require("./config/database")
const dotenv = require("dotenv").config()
const errorHandler = require("./middleware/errorhandler")
const routerVisitant = require("./routes/vistantRoutes")
const routerClient = require("./routes/loggedRoutes")
const cookieParser = require('cookie-parser')
const methodOverride = require("method-override")


//setando a porta e incializando o express
const PORT = process.env.PORT || 5000
const app = express()

//estabelecendo conexão com o banco de dados
connectDb()

//definindo um bodyparser
app.use(express.json())
//configurando o app para receber formulários HTML
app.use(express.urlencoded({ extended: true }));
// Configurando o app para usar method-override 
app.use(methodOverride('_method'))
//o app precisa ter acesso a cookie parser para verificar o token do user
app.use(cookieParser())

//o app deve usar as rotas definidas pelo router
app.use("/", routerVisitant.router)
app.use("/", routerClient.router)


//setando o error handler para lidar com erros de forma mais simples
app.use(errorHandler)

//informando a pasta onde o express encontrará arquivos estáticos
app.use(express.static('static'))

//setando a view engine para que o app tenha acesso às templates ejs
app.set("view engine", "ejs") 
app.set("views", "./views")

//o app deve ouvir a essa porta
app.listen(PORT, ()=>{
    console.log("Running on port: ", PORT)
})

