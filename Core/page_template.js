let response_get = (req,res,next)=>
{
    // Get code
    res.send("Hello wolrd")
}

let response_post = (req,res,next)=>
{
    // Post code
}

let response_put= (req,res,next)=>
{
    // Put code
}

let response_delete = (req,res,next)=>
{
    // Delete code
}

module.exports.get=response_get
module.exports.post=response_post
module.exports.put=response_put
module.exports.delete=response_delete