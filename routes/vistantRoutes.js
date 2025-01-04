const express = require("express")
const { home, login, loginUser, registerUser, register } = require("../controller/visitantController")
const router = express.Router()

router.get("/home", home)

router.get("/login", login).post("/login", loginUser)

router.post("/register", registerUser).get("/register", register)

module.exports = {router}