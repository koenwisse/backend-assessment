require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 12,
  TOKEN_SECRET:
    process.env.TOKEN_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m",
  POSTGRES_URL:
    process.env.POSTGRES_URL ||
    "postgres://ywretvxu:pSOiuz0119aVuNe5ac8bBTtowqH9xlsO@tai.db.elephantsql.com/ywretvxu",
};
