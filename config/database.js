const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config()

const connectDb = asyncHandler(async() =>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb conectado")
})

module.exports = connectDb