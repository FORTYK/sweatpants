const { readFile } = require("fs/promises");

let router = express().Router;
let db = require("./bin/db.js");

router.use((req, res, next) => {
    // Output the requested API URL
    console.log(req.url);

    next();
});

// Routes that requires no auth
// Such as performing authentication

router.use((req, res, next) => {
    // Perform auth, and reject
    next();
});

// Routes that need auth

module.exports = {
    router,
};
