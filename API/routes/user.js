let express = require("express");
let router = express.Router();
const { db } = require("../../config/db.js");
const user = require("../lib/user.js");

router.get("/", (req, res) => { });

router.post("/", (req, res) => {
    const { id } = req.body;

    if (id) {
        updateUser(req, res);
    } else {
        createUser(req, res);
    }
});


module.exports = router;
