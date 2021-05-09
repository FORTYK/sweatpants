const express = require("express");
const router = express.Router();
const { User } = require("../../config/db.js");
const { isExist, isSingle, shortHash, err } = require("./../tools");

router.post("/login", async (req, res) => {
    // add validation
    const { login, password } = req.body;

    const users = await User.findAll({
        where: {
            login: login,
        },
        attributes: ["iduser", "display", "email", "status", "password"],
    });

    if (!isExist(users)) {
        return res.status(404).send(err("User not found"));
    }
    if (!isSingle(users)) {
        // Duplicate user when login should not occur, log with shorthash
        return res.status(500).send(err("Please contact an administrator"));
    }

    let user = users[0];

    if (user.status === 1) {
        return res.send(
            err({
                error: "User email unverified",
                message: "In order to start using your account you need to verify your email",
            })
        );
    }

    if (user.password === password) {
        // Register login in the session
        await loginSession(req, user);
        return res.send({ success: true });
    } else {
        return res.send(err(["Authentication failed", "User login or password does not match"]));
    }
});

router.get("", async (req, res) => {
    if (req.session.isSet) {
        if (req.session.guest === false) {
            return res.send({
                success: true,
                user: {
                    login: req.session.login,
                    display: req.session.display,
                    email: req.session.email,
                },
            });
        } else {
            return res.send({ success: true, user: null });
        }
    } else {
        let newSession = await initSession(req);
        if (newSession) {
            return res.send({ success: true, user: null });
        }

        return res.send({ success: false });
    }
});

const initSession = async (req) => {
    try {
        await req.session.regenerate(() => {
            req.session.isSet = true;
            req.session.guest = true;
        });

        return true;
    } catch (error) {
        console.log("initSession error :>> ", error);

        // log error
        return false;
    }
};

const loginSession = async (req, user) => {
    try {
        req.session.isSet = true;
        req.session.guest = false;
        req.session.userid = user.iduser;
        req.session.display = user.display;

        await req.session.save();
        return true;
    } catch (error) {
        console.log("login error :>> ", error);

        // log error
        return false;
    }
};

const logoutSession = async (req, res) => {
    let isLogout = await initSession();
    if (isLogout) {
        return res.send();
    } else {
        return res.status(500).send(err(""));
    }
};

module.exports = {
    router,
};
