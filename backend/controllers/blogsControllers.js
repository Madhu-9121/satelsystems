const { saveBlog, getallBlogs, updateBlog, deleteBlog } = require("../services/blogsServices")


const createPost = async(req,res)=>{
    console.log("req came to controller", req.body)
try{
    const {title,content,userId} = req.body
    const result = await saveBlog(title,content,userId)
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
        const { userId } = req.query;
        console.log("userId in controller",userId)
        const result = await getallBlogs(userId)
        
        res.status(201).json({
            message:"Got the Posts",
            postId: result,
        })
    
    }catch(e){
        res.status(500).json({ message: e.message });
    }
    }

    const updatePost = async (req, res) => {
        try {
            const { postId, updatedData } = req.body;
            const updatedPost = await updateBlog(postId, updatedData);
            res.status(200).json(updatedPost);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    };
    
    const deletePost = async (req, res) => {
        try {
            const { postId } = req.body;
            await deleteBlog(postId);
            res.status(200).json({ message: "Post deleted successfully" });
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    };
            


module.exports = {createPost,deletePost,updatePost,getPosts}