const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/usercontrollers')
router.get("/endpoint",userControllers.getdata)
router.post("/register",userControllers.registerController)
router.post("/login",userControllers.loginController)

module.exports = router