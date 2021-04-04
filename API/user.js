let express = require("express");
let router = express.Router();

router.get("", (req, res, next) => {
    return res.send({ title: "response" });
});

router.post("", (req, res, next) => {
    return res.send({ title: "response" });
});

module.exports = {
    router,
};
