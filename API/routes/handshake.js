const express = require("express");
const router = express.Router();
const { err } = require("./../tools");

const session = require("./../lib/session");

router.get("", async (req, res) => {
  const { isSet, guest, login, display, email } = req.session;
  // Set up CSRF
  if (isSet) {
    if (guest === false) {
      return res.send({
        user: {
          login: login,
          display: display,
          email: email,
        },
        // Send CSRF
      });
    } else {
      return res.send({ user: null });
    }
  } else {
    await session.initialize(req, res);
  }
});


module.exports = router;
