require('dotenv').config({path:"./.env"})
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT



mongoose
    .connect(process.env.DB_URI)
    .then(()=>{console.log("db connected")})
    .catch((e)=>console.log(e))
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})


// login

// email id
// password

// register

// username
// email id
// password