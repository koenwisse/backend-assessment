const { toData } = require("./jwt");
const User = require("../models").user;

async function authMiddleware(req, res, next) {
  try {
    const authHeader =
      req.headers.authorization && req.headers.authorization.split(" ");
    console.log("GOT STUCK", authHeader);
    if (authHeader && authHeader[0] === "Bearer" && authHeader[1]) {
      try {
        const data = toData(authHeader[1]);
        const user = await User.findByPk(data.userId);

        if (!user) {
          next();
        } else {
          req.user = user;
          next();
        }
      } catch (error) {
        res.status(400).send("Invalid JWT token");
      }
    } else {
      res.status(400).send("Please login first.");
    }
  } catch (error) {
    console.log("Error in middleware", error);
    next(error);
  }
}

module.exports = authMiddleware;
