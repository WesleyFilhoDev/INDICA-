const { Sequelize } = require("sequelize");
require("dotenv").config(); // para ler o .env

// Usa a URL do NeonDB do .env
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // importante para NeonDB
    },
  },
  logging: false, // se quiser ver os logs SQL, coloque true
});

// Testa a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com NeonDB realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao NeonDB:", error);
  }
}

testConnection();

module.exports = sequelize;
