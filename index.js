var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
    res.send("hello world");
});
let express = require("express");
let app = express();
let api = require("./API/api.js");

app.use("/api", api);

// respond with "hello world" when a GET request is made to the homepage
app.get("*", function (req, res) {
    res.send("hello world");
});
