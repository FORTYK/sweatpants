const { MongoClient } = require("mongodb").MongoClient;
const assert = require("assert");

let db = new MongoClient(process.env.MONGO);

module.exports = {
    db,
};
