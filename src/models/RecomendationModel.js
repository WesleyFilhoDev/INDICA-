const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const UserModel = require("./Usermodel");

const RecomendationModel = sequelize.define("Recomendation", {
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
  category: {
    type: DataTypes.STRING,
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
      model: User,
      key: "id",
    },
  },

  tableName: "recommendations",
  timestamps: false,
});

//RELAÇÃO N:1 COM USERMODEL
RecomendationModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user",
});

UserModel.hasMany(RecomendationModel, {
  foreignKey: "userId",
  as: "recommendations",
});

module.exports = RecomendationModel;
