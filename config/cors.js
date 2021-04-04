var cors = require("cors");
let origin = process.env.HOST + (process.env.PORT ? ":" + process.env.PORT : "");

const mod = (app) => {
    app.use(
        cors({
            origin: [origin],
            methods: ["GET", "POST", "DELETE"],
            credentials: true, // enable set cookie
        })
    );
};

module.exports = mod;
