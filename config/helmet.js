var helmet = require("helmet");
const nocache = require("nocache");

const mod = (app) => {
    app.use(helmet());
    /*
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                imgSrc: ["'self'", ""],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
                fontSrc: ["'self'", "fonts.gstatic.com"],
            },
        })
    );
    */
    app.disable("x-powered-by");
    app.use(helmet.hidePoweredBy({ setTo: "DummyServer 1.0" }));
    app.use(nocache());
};

module.exports = mod;
