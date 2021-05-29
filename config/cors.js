var cors = require("cors");
let origin = process.env.ORIGIN_HOST + (process.env.PORT ? ":" + process.env.PORT : "");

const mod = (app) => {
    app.use(
        cors({
            origin: [`${process.env.ORIGIN_HOST}:${process.env.PORT}`],
            methods: ["GET", "POST", "DELETE"],
            credentials: true, // enable set cookie
        })
    );
};

module.exports = mod;
