const sequelize = require("../config/database");
const UserModel = require("../models/UserModel");
const RecomendationModel = require("../models/RecomendationModel");
const CategoryModel = require("../models/CategoryModel");

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log("Tabelas criadas com sucesso!");
    process.exit();
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}

syncDatabase();
