const sequelize = require("../config/database");
const UserModel = require("../models/UserModel");
const RecomendationModel = require("../models/RecomendationModel");
const CategoryModel = require("../models/CategoryModel");
const poulateCategories = require("./populatesCategories");

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log("Tabelas criadas com sucesso!");
    await poulateCategories();
    process.exit();
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}

syncDatabase();
