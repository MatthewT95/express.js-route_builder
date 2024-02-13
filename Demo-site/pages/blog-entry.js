let response_get = (req,res,next)=>
{
    res.send("Blog "+ req.params.blog_id)
}

module.exports.get=response_get