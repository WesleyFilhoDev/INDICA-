const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const RecomendationModel = require("./RecomendationModel"); // path e casing corretos

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

// Relação 1:N com Recomendation
Category.hasMany(RecomendationModel, {
  foreignKey: "categoryId",
  as: "recommendations", // padronizado
});

RecomendationModel.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

module.exports = Category;
