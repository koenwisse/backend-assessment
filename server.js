const express = require("express");
const app = express();
const { PORT } = require("./config/constants");

const Team = require("./models").team;
const Player = require("./models").player;

const { Op } = require("sequelize");

app.use(express.json());

// GET ALL TEAMS
app.get("/teams", async (req, res, next) => {
  try {
    const teams = await Team.findAll();

    if (teams.length > 0) {
      res.status(200).send(teams);
    } else {
      res.status(404).send("No teams found");
    }
  } catch (error) {
    next(error);
  }
});

// GET ALL PLAYERS
app.get("/players", async (req, res, next) => {
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
app.post("/players", async (req, res, next) => {
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

// GET ALL PLAYERS FROM A SPECIFIC TEAM => WITH RELATION FOR FULL POINTS
app.get("/teams/:teamId", async (req, res, next) => {
  try {
    const teamId = req.params.teamId;

    // SOLUTION WITH RELATION
    const team = await Team.findByPk(teamId, { include: { model: Player } });

    if (team) {
      res.status(200).send(team);
    } else {
      res.status(404).send("No team found");
    }

    // SOLUTION WITHOUT RELATION
    // const players = await Player.findAll({ where: { teamId } });
    // if (players.length > 0) {
    //   res.status(200).send(players);
    // } else {
    //   res.status(404).send("No players found");
    // }
  } catch (error) {
    next(error);
  }
});

// UPDATE NUMBER OF CHAMPIONSHIPS WON BY X TEAM
app.put("/teams/:teamId", async (req, res, next) => {
  try {
    const { teamId } = req.params;
    const { titles } = req.body;

    if (!titles) {
      res.status(400).send("Please provide the number of titles won.");
    } else {
      const teamToUpdate = await Team.findByPk(teamId);
      if (!teamToUpdate) {
        res.status(404).send("Team not found.");
      } else {
        const updatedTeam = await teamToUpdate.update(req.body);
        res.status(200).send(updatedTeam);
      }
    }
  } catch (error) {
    next(error);
  }
});

// GREEN ONES

// GET ALL PLAYERS ABOVE X AGE (EITHER DIRECTLY ON QUERY || FILTER AFTERWARDS)
// HTTPie requests with query strings must be in quotes, i.e. ":4000/players/filter?age=30" in place of :4000/players/filter?age=30

app.get("/players/filter", async (req, res, next) => {
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

app.delete("/players/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("GOT HERE", id);
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

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
