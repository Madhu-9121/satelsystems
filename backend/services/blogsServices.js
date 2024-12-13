const Blog = require("../models/blog")


const saveBlog = async(title,content,userId)=>{
    console.log("req came to services",userId)
    try{
        const newBlog = await Blog.create({title,content,author:userId})
        console.log("new blog",newBlog)
        return newBlog
    }
    catch(e){
        throw e
    }

}

const getallBlogs = async(userId)=>{
    try{
    console.log("got services",userId)
    const allPost = await Blog.find({author:userId})
    return allPost
    }catch(e){
    throw e
    }
}
const updateBlog = async (postId, updatedData) => {
try{    
    return await Blog.findByIdAndUpdate(postId, updatedData, { new: true });
}catch(e){
    throw e
}};
const deleteBlog = async (postId) => {
    return await Blog.findByIdAndDelete(postId);
};

module.exports = {saveBlog,getallBlogs,updateBlog,deleteBlog}