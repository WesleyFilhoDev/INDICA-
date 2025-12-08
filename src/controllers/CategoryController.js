const Category = require("../models/CategoryModel");

const CategoryController = {
  // RETORNA TODAS AS CATEGORIAS
  async getAll(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "name"], // seleciona apenas os campos que interessam
        order: [["name", "ASC"]], // opcional: ordena alfabeticamente
      });
      return res.status(200).json(categories);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },
};

module.exports = CategoryController;
