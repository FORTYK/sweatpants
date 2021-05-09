require("dotenv").config();
const path = require("path");
const compression = require("compression");
const express = require("express");
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./config/session")(app);
require("./config/helmet")(app);
require("./config/cors")(app);
app.set("trust proxy", 1); // Trust first proxy: Express will have knowledge that it's sitting behind a proxy and that the X-Forwarded-* header fields
app.use(express.static(path.join(__dirname, "/build")));
//var helmet = require("helmet");
//var cors = require("cors");
//var cors = require("./API/config/cors.js");

app.use((req, res, next) => {
    // Output the requested API URL
    console.log(req.originalUrl);
    next();
});

var api = require("./API/index.js");
app.use("/api", api);

// respond with "hello world" when a GET request is made to the homepage
app.use("*", (req, res) => {
    if (process.env.NODE_ENV === "production") {
        return res.sendFile(path.join(__dirname, "/build/index.html"));
    }
});

app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`http://localhost:${process.env.EXPRESS_PORT}`);
});
