require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 12,
  TOKEN_SECRET: process.env.TOKEN_SECRET || "jahgdjhavflhavfjkhasvlhadaad",
  POSTGRES_URL: process.env.POSTGRES_URL,
};
