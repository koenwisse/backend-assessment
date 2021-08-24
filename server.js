const express = require("express");
const app = express();
const { PORT } = require("./config/constants");

const Team = require("./models").team;
const Player = require("./models").player;

app.use(express.json());

app.get("/teams", async (req, res, next) => {
  try {
    const teams = await Team.findAll();

    res.status(200).send(teams);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
