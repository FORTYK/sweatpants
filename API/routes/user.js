let express = require("express");
let router = express.Router();
const { db, models } = require("../../config/db.js");

router.get("/", (req, res) => {});

router.post("/", (req, res) => {
    const { id } = req.body;

    if (id) {
        updateUser(req, res);
    } else {
        createUser(req, res);
    }
});

const updateUser = (req, res) => {
    return res.send({ title: "response" });
};
const createUser = (req, res) => {
    return res.send({ title: "response" });
};

module.exports = {
    router,
};
