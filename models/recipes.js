module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Recipes;
};
