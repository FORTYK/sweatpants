require("dotenv").config();
var express = require("express");
var app = express();

require("./config/helmet")(app);
require("./config/cors")(app);
app.set("trust proxy", 1); // Trust first proxy: Express will have knowledge that it's sitting behind a proxy and that the X-Forwarded-* header fields
//var helmet = require("helmet");
//var cors = require("cors");
//var cors = require("./API/config/cors.js");

app.use(async (req, res, next) => {
    /*
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
*/
    // Output the requested API URL
    console.log(req.url);
    next();
});

app.use("/api", require("./API/index.js").router);

// respond with "hello world" when a GET request is made to the homepage
app.get("*", async (req, res) => {
    return res.send("hello world");
});

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.EXPRESS_PORT}`);
});
