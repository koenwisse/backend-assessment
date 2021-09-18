const express = require("express");
const { Router } = express;
const router = new Router();

const Team = require("../models").team;
const Player = require("../models").player;

// YELLOW REQUIREMENTS

// GET ALL TEAMS
router.get("/", async (req, res, next) => {
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

// GET ALL PLAYERS FROM A SPECIFIC TEAM => WITH RELATION FOR FULL POINTS
router.get("/:teamId", async (req, res, next) => {
  try {
    const teamId = req.params.teamId;

    const team = await Team.findByPk(teamId, { include: { model: Player } });

    if (team) {
      res.status(200).send(team);
    } else {
      res.status(404).send("No team found");
    }
  } catch (error) {
    next(error);
  }
});

// UPDATE NUMBER OF CHAMPIONSHIPS WON BY X TEAM
router.put("/:teamId", async (req, res, next) => {
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

module.exports = router;
