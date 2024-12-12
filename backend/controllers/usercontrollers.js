const { registerUser, verifyLogin } = require("../services/userServices")


const getdata = (req,res)=>{
    res.send("hi from server")
}
const registerController = async (req,res)=>{
    try{
        console.log("req.body",req.body)
        const {userName,password,email} = req.body
        const result = await registerUser(userName,password,email)
        console.log("result")
        res.status(201).json({
            message: "User registered successfully",
            userId: result,
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const loginController = async(req,res)=>{

    try{
  
        const {password,email} = req.body
        const result = await verifyLogin(email,password)
        res.status(200).json({
            message:"User logged successfully",
            userId: result,
        })
    }catch(e){
        res.status(500).json({ message: e.message });
        
    }
}
module.exports = {getdata,registerController,loginController}



const req = {

    body:{
        email:"qwertyui@asdf.com",
        password:"qwertyui"
    }
}

