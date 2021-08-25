const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const User = require("../models").user;

const router = new Router();

// POST create new user
router.post("/signup", async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    // DON'T SEND BACK USER'S PASSWORD
    delete newUser.dataValues["password"];
    const token = toJWT({ userId: newUser.id });

    res.status(200).send({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

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
