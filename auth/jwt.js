const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config/constants");

function toJWT(data) {
  return jwt.sign(data, TOKEN_SECRET, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, TOKEN_SECRET);
}

module.exports = { toJWT, toData };
