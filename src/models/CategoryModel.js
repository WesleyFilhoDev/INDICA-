const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Recomendation = require("./RecomendationModel");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

// Relação 1:N com Recommendation
Category.hasMany(Recomendation, {
  foreignKey: "categoryId",
  as: "recommendations",
});

Recomendation.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

module.exports = Category;
