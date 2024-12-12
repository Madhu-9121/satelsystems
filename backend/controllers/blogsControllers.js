const { saveBlog, getallBlogs } = require("../services/blogsServices")


const createPost = async(req,res)=>{
    // console.log("req came to controller", req.body)
try{
    const {title,content,email,author} = req.body
    const result = await saveBlog(title,content,email,author)
    // console.log(result)
    res.status(201).json({
        message:"post created",
        postId: result,
    })
}catch(e){
    console.log("error",e.message)
    res.status(500).json({ message: e.message });
}
}

const getPosts = async(req,res)=>{
    try{
        const {userId} = req.body
        const result = await getallBlogs(userId)
        // console.log(result)
        res.status(201).json({
            message:"Got the Posts",
            postId: result,
        })
    
    }catch(e){
        res.status(500).json({ message: e.message });
    }
    }

const updatePost = async(req,res)=>{
        try{
        
        }catch(e){
            res.status(500)
        }
        }
const deletePost = async(req,res)=>{
            try{
            
            }catch(e){
                res.status(500)
            }
            }
          


module.exports = {createPost,deletePost,updatePost,getPosts}