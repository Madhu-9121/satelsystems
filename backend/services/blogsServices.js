const Blog = require("../models/blog")


const saveBlog = async(title,content,email,author)=>{
    console.log("req came to services")
    try{
        const newBlog = await Blog.create({title,content,email,author})
        console.log("new blog",newBlog)
        return newBlog
    }
    catch(e){
        throw e
    }

}

const getallBlogs = async(userId)=>{
    try{
    const allPost = await Blog.find({author:userId})
    return allPost
    }catch(e){
    throw e
    }
}
module.exports = {saveBlog,getallBlogs}