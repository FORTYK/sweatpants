const { err } = require('./../tools.js');

var session = {
  async initialize(req, res) {
    try {
      await req.session.regenerate(async () => {
        req.session.isSet = true;
        req.session.guest = true;
        await req.session.save();

        res.send({ user: {} });
      });
    } catch (error) {
      // log error
      res.send(err('Session could not initialize'))
    }
  },

  async logout(req, res) {
    await this.initialize(req, res);
  },


  async login(req, res, user) {
    console.log('user :>> ', user);
    try {
      await req.session.regenerate(async () => {
        req.session.isSet = true;
        req.session.guest = false;
        req.session.userid = user.iduser;
        req.session.login = user.login;
        req.session.email = user.email;
        req.session.display = user.display;

        await req.session.save();
        res.send({
          user: {
            iduser: req.session.iduser,
            login: req.session.login,
            email: req.session.email,
            display: req.session.display
          }
        });
      });
    } catch (error) {
      console.log("login error :>> ", error);
      // log error

      res.status(500).send(err(""));
    }
  }
}

module.exports = session;