require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 12,
  TOKEN_SECRET:
    process.env.TOKEN_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m",
};
