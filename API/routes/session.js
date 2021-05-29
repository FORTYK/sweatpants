const express = require("express");
const router = express.Router();
const { User } = require("../../config/db.js");
const { isExist, isSingle, shortHash, err } = require("./../tools");

const session = require("./../lib/session");

router.post("/login", async (req, res) => {
  // add validation
  const { login, password } = req.body;

  const users = await User.findAll({
    where: {
      login: login,
    },
    attributes: ["iduser", "login", "display", "email", "status", "password"],
  });

  if (!isExist(users)) {
    return res.status(404).send(err("User not found"));
  }
  if (!isSingle(users)) {
    // Duplicate user when login should not occur, log with shorthash
    return res.status(500).send(err("Please contact an administrator"));
  }
  console.log('users :>> ', users);
  let user = users[0].dataValues;

  if (user.status === 1) {
    return res.status(400).send(
      err(["User email unverified", "In order to start using your account you need to verify your email"])
    );
  }

  if (user.password === password) {
    // Register login in the session
    await session.login(req, res, user);
  } else {
    return res.status(400).send(err(["Authentication failed", "User login or password does not match"]));
  }
});

router.post("/logout", async (req, res) => {
  await session.logout(req, res);
});


module.exports = router;
