const express = require("express");
const router = express.Router();

// Routes that requires no auth
// Such as performing authentication
router.use("/session", require("./routes/session").router);

// Requires logged in?
router.use("/user", require("./routes/user").router);
router.use("/post", require("./routes/post").router);

/*
router.use(async (req, res, next) => {
    // Perform auth, and reject
    next();
});
*/
// Routes that need auth

module.exports = router;
