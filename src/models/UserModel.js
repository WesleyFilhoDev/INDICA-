const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const RecomendationModel = require("./RecomendationModel");

const UserModel = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },

  tableName: "users",
});

//RELAÇÃO 1:N COM RECOMENDATIONMODEL
UserModel.hasMany(RecomendationModel, {
  foreignKey: "userId",
  as: "recommendations",
});

RecomendationModel.belongsTo(UserModel, {
  foreignKey: "userId",
  as: "user",
});

module.exports = UserModel;
