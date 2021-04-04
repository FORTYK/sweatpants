let express = require("express");
let router = express.Router();

// Routes that requires no auth
// Such as performing authentication
router.get("post", async (req, res, next) => {
    // Perform auth, and reject
    return res.send({ title: "response" });
    //next();
});

router.use("user", require("./user").routes);
router.use("post", require("./post").routes);

router.use(async (req, res, next) => {
    // Perform auth, and reject
    next();
});

// Routes that need auth

module.exports = {
    router,
};
