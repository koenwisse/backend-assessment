const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;

const router = new Router();

// POST user credentials to login
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide login credentials.");
  }
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(400)
        .send("User with that email not found or password incorrect.");
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });

    res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
