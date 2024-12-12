const User = require("../models/user")

const registerUser = async(userName,password,email)=>{
try{
    const existing = await User.findOne({email:email})
    console.log("existing",existing)
    if(existing){
        throw new Error("User already existed !!")
    }else{
        // create user with data we have
        const user = new User ({userName,password,email})
        // saving the user
        const savedUser = await user.save()
        // _id 
        return savedUser._id
    }
}
catch(e){

throw e
}
}

const verifyLogin= async(email,password)=>{
    try{
        const user = await User.findOne({email})
        console.log("user in services",user)
        if(!user){
            throw Error ("User not existed !!")
        }
        // loggic to verify the password
        if(user.password === password){
            console.log("user is verified")
            return user._id
        }else{
            throw new Error("Password is wrong")
            
        }


    }catch(e){
        throw e
    }
}
module.exports = {registerUser,verifyLogin}