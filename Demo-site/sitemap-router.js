const { error } = require("console");
const express = require("express")
let router = express.Router()

function build_routes(sitemap,page_dir)
{
    let next_router = express.Router()
    // Checks if sitemap is an object
    if (typeof sitemap == "object")
    {
        Object.keys(sitemap).forEach((key)=>{
            if (typeof sitemap[key] == "object")
            {
                // Recursively adds routers 
                next_router.use("/"+key,build_routes(sitemap[key],page_dir))
            }
            else
            {
                // Get page response functions
                let reponse_functions = require(page_dir+sitemap[key])
                // Get get request callback
                if (reponse_functions.get)
                {
                   next_router.get("/"+key,reponse_functions.get)
                }
                // Get post request callback
                if (reponse_functions.post)
                {
                   next_router.post("/"+key,reponse_functions.post)
                }
                // Get put request callback
                if (reponse_functions.put)
                {
                   next_router.put("/"+key,reponse_functions.put)
                }
                // Get delete request callback
                if (reponse_functions.delete)
                {
                   next_router.delete("/"+key,reponse_functions.delete)
                }
            }
        })
    }
    return next_router
}

module.exports=build_routes