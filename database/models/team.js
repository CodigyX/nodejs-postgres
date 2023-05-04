'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Team.init({
    name: DataTypes.STRING,
    league: DataTypes.INTEGER,
    cup: DataTypes.INTEGER,
    concacaf: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    stadium: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    nameleague: DataTypes.STRING,
    fundation: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};