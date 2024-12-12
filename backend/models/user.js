const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String

    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema) 

module.exports = User

