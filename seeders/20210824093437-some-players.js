"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "players",
      [
        {
          name: "Overmaars",
          nationality: "NL",
          age: 25,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Davids",
          nationality: "NL",
          age: 22,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robben",
          nationality: "NL",
          age: 20,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cantona",
          nationality: "FR",
          age: 23,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          nationality: "BR",
          age: 21,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          nationality: "PT",
          age: 20,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Henry",
          nationality: "FR",
          age: 24,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stam",
          nationality: "NL",
          age: 30,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puyol",
          nationality: "ES",
          age: 28,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Figo",
          nationality: "PT",
          age: 26,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zidane",
          nationality: "FR",
          age: 27,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barthez",
          nationality: "FR",
          age: 33,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Messi",
          nationality: "AR",
          age: 19,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maradona",
          nationality: "AR",
          age: 33,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raul",
          nationality: "ES",
          age: 29,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thuram",
          nationality: "FR",
          age: 28,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maldini",
          nationality: "IT",
          age: 36,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cannavaro",
          nationality: "IT",
          age: 31,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Del Piero",
          nationality: "IT",
          age: 27,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Casillas",
          nationality: "ES",
          age: 26,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldinho",
          nationality: "BR",
          age: 23,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("players", null, {});
  },
};
