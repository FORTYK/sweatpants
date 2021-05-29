const express = require("express");
const router = express.Router();

// Routes that requires no auth
// Such as performing authentication
router.use("/handshake", require("./routes/handshake"));

// Requires CSRF
router.use("/session", require("./routes/session"));

// Requires User to be logged in?
router.use("/user", require("./routes/user"));
router.use("/post", require("./routes/post"));

/*
router.use(async (req, res, next) => {
    // Perform auth, and reject
    next();
});
*/
// Routes that need auth

module.exports = router;
