"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      team.hasMany(models.player);
    }
  }
  team.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      founded: { type: DataTypes.INTEGER, allowNull: false },
      titles: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "team",
    }
  );
  return team;
};
