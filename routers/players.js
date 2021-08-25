const express = require("express");
const { Router } = express;
const router = new Router();

const Player = require("../models").player;

const { Op } = require("sequelize");

// YELLOW REQUIREMENTS

// GET ALL PLAYERS
router.get("/", async (req, res, next) => {
  try {
    const players = await Player.findAll();

    if (players.length > 0) {
      res.status(200).send(players);
    } else {
      res.status(404).send("No players found");
    }
  } catch (error) {
    res.status(400).send("Something went wrong.");
  }
});

// POST - CREATE NEW PLAYER
router.post("/", async (req, res, next) => {
  try {
    const { name, age, nationality, teamId } = req.body;

    if (!name || !age || !nationality || !teamId) {
      res
        .status(400)
        .send(
          "Missing parameters. Please provide the name, age, nationality, and teamId of the player."
        );
    } else {
      const newPlayer = await Player.create({ name, age, nationality, teamId });

      if (!newPlayer) res.status(400).send("Something went wrong");
      res.status(200).send(newPlayer);
    }
  } catch (error) {
    res.status(400).send("Something went wrong.");
  }
});

// GREEN REQUIREMENTS

// GET a specific player
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send("Please provide a player ID");
    } else {
      const player = await Player.findByPk(id);

      if (player) {
        res.status(200).send(player);
      } else {
        res.status(404).send("No player found");
      }
    }
  } catch (error) {
    res.status(400).send("Something went wrong.");
  }
});

// GET ALL PLAYERS ABOVE X AGE (EITHER DIRECTLY ON QUERY || FILTER AFTERWARDS)
// HTTPie requests with query strings must be in quotes, i.e. ":4000/players/filter?age=30" in place of :4000/players/filter?age=30
router.get("/filter", async (req, res, next) => {
  try {
    // Can be replaced with sending a body on the request instead of query but would be a POST instead
    const { age } = req.query;
    if (!age) {
      res.status(400).send("Please provide the age parameter.");
    } else {
      // FILTER ON QUERY
      const filteredPlayers = await Player.findAll({
        where: { age: { [Op.gte]: age } },
      });

      // FILTER AFTERWARDS
      // const allPlayers = await Player.findAll();
      // const filteredPlayers = allPlayers.filter((player) => player.age > age);

      if (filteredPlayers.length > 0) {
        res.status(200).send(filteredPlayers);
      } else {
        res.status(404).send(`No players found above the age of ${age}`);
      }
    }
  } catch (error) {
    next(error);
  }
});

// DELETE X PLAYER
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Please provide a player ID");
    } else {
      const playerToBeDelete = await Player.findByPk(id);
      if (!playerToBeDelete) {
        res.status(404).send(`No player found with ID: ${id}`);
      } else {
        const deleted = playerToBeDelete.destroy();
        res.status(200).send("Player deleted successfuly");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
