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
          founded: 1899,
          nationalChampionships: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barcelona",
          country: "ES",
          founded: 1899,
          nationalChampionships: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juventus",
          country: "IT",
          founded: 1899,
          nationalChampionships: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porto",
          country: "PT",
          founded: 1899,
          nationalChampionships: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AZ Alkmaar",
          country: "NL",
          founded: 1899,
          nationalChampionships: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chelsea",
          country: "EN",
          founded: 1899,
          nationalChampionships: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manchester United",
          country: "EN",
          founded: 1899,
          nationalChampionships: 10,
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
