require('dotenv').config({path:"./.env"})
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
const port = process.env.PORT
const userRoutes = require("./routes/userRoutes")
const blogsRoutes = require("./routes/blogsRoutes")
app.use(cors())
app.use(express.json())
app.use("/user",userRoutes)
app.use("/blogs",blogsRoutes)
mongoose
    .connect(process.env.DB_URI)
    .then(()=>{
        app.listen(port,()=>{ 
            console.log(`server started at ${port}`)
        })
        console.log("db connected")
    })
    .catch((e)=>console.log(e))


// Get-ExecutionPolicy
// Set-ExecutionPolicy -ExecutionPolicy Unrestricted


// login

// email id
// password

// register

// username
// email id
// password