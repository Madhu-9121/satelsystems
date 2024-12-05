const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName:{
        require:true
    },
    email:{
        require:true,
        unique:true
    },
    password:{
        require:true
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema) 

module.exports = User

