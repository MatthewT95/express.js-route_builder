const express = require("express")
const app = express()
const fs = require('fs');
let sitemap=JSON.parse(fs.readFileSync("./site-map.json","utf8"))

const site_router = require("./sitemap-router")

app.use("/",site_router(sitemap,"./pages/"))
app.listen(3000)
