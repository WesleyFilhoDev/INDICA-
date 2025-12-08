const Category = require("../models/CategoryModel");

//LISTA DE CATEGORIAS PARA POPULAR O BANCO
const defaultCategories = [
  { name: "Filme" },
  { name: "Série" },
  { name: "Livro" },
  { name: "Música" },
  { name: "Jogo" },
  { name: "Jogo Mobile" },
  { name: "Jogo PC" },
  { name: "Jogo Console" },
  { name: "Documentário" },
  { name: "Anime" },
  { name: "Podcast" },
  { name: "Curso" },
  { name: "App" },
  { name: "Site" },
];

async function populateCategories() {
  try {
    for (const categoryData of defaultCategories) {
      const [category, created] = await Category.findOrCreate({
        where: { name: categoryData.name },
        defaults: categoryData,
      });
      if (created) {
        console.log(`Categoria '${category.name}' criada.`);
      } else {
        console.log(`Categoria '${category.name}' já existe.`);
      }
    }
    console.log("População de categorias concluída.");
  } catch (error) {
    console.error("Erro ao popular categorias:", error);
  }
}

module.exports = populateCategories;
