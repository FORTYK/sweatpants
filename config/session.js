const { db } = require("./db");
const session = require("express-session");
var SequelizeStore = require("connect-session-sequelize")(session.Store);

/**
 * Construct a singleton sequelize object that mounts to app
 *
 */

const mod = (app) => {
    const sequelizeStore = new SequelizeStore({
        db: db,
        /*
        checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
        expiration: 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
        */
    });

    app.use(
        session({
            secret: "tempsecretkey",
            store: sequelizeStore,
            resave: false,
            saveUninitialized: true,
            cookie: {
                httpOnly: true,
                path: "/",
                secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
            },
        })
    );
    //sequelizeStore.sync();
};

module.exports = mod;
