let express = require("express");
let router = express.Router();

router.post("", (req, res, next) => {
    return res.send({ title: "response" });
});

module.exports = {
    router,
};
