const { toData } = require("./jwt");

async function auth(req, res, next) {
  try {
    const authHeader =
      req.headers.authorization && req.headers.authorization.split(" ");

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
    }
  } catch (error) {
    next(error);
  }
}
