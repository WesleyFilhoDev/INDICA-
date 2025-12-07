const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const UserModel = require("./UserModel");

const RecomendationModel = sequelize.define(
  "Recomendation", // nome do model
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
  },
  {
    tableName: "recomendations", // ✅ aqui fora
    timestamps: false, // timestamps também vai aqui
  }
);

// Relações
RecomendationModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user",
});

UserModel.hasMany(RecomendationModel, {
  foreignKey: "userId",
  as: "recommendations",
});

module.exports = RecomendationModel;
