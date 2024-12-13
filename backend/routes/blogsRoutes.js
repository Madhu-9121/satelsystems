const express = require('express')
const router = express.Router()
const blogsController = require('../controllers/blogsControllers')
// get,post,put, delete,patch
// create post
router.post("/create",blogsController.createPost)
// get the post
router.get("/getpost",blogsController.getPosts)

// update post
router.patch("/update",blogsController.updatePost)

// delete post
router.delete("/delete",blogsController.deletePost)



module.exports = router

// http:localhost:1000/blogs/create