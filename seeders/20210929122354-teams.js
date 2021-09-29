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
      "teams",
      [
        {
          name: "Ajax",
          country: "NL",
          founded: 1900,
          titles: 8,
          championsLeagueParticipant: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barcelona",
          country: "ES",
          founded: 1899,
          titles: 17,
          championsLeagueParticipant: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juventus",
          country: "IT",
          founded: 1897,
          titles: 16,
          championsLeagueParticipant: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porto",
          country: "PT",
          founded: 1893,
          titles: 18,
          championsLeagueParticipant: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AZ Alkmaar",
          country: "NL",
          founded: 1967,
          titles: 1,
          championsLeagueParticipant: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chelsea",
          country: "EN",
          founded: 1905,
          titles: 6,
          championsLeagueParticipant: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manchester United",
          country: "EN",
          founded: 1878,
          titles: 12,
          championsLeagueParticipant: false,
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
    await queryInterface.bulkDelete("teams", null, {});
  },
};
