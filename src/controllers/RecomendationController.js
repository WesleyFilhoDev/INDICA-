const RecomendationModel = require("../models/RecomendationModel");
const UserModel = require("../models/UserModel");

const RecomendationController = {
  //CRIAR RECOMENDAÇÃO
  async create(req, res) {
    try {
      const { title, categoryId, description, rating, imageUrl, userId } =
        req.body;
      if (!title || !categoryId || !description || !rating || !userId) {
        return res.status(400).json({
          error: "Todos os campos obrigatórios devem ser preenchidos.",
        });
      }
      const newRecomendation = await RecomendationModel.create({
        title,
        categoryId,
        description,
        rating,
        imageUrl,
        userId,
      });
      res.status(201).json(newRecomendation);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar recomendação." });
    }
  },

  //LISTARTODAS RECOMENDAÇÕES
  async getAll(req, res) {
    try {
      const recomendations = await RecomendationModel.findAll({
        include: [
          { model: UserModel, as: "user", attributes: ["id", "name", "email"] },
        ],
      });
      res.status(200).json(recomendations);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar recomendações." });
    }
  },

  //BUSCAR RECOMENDAÇÃO POR ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const recomendation = await RecomendationModel.findByPk(id, {
        include: [
          { model: UserModel, as: "user", attributes: ["id", "name", "email"] },
        ],
      });
      if (!recomendation) {
        return res
          .status(404)
          .json({ message: "Recomendação não encontrada." });
      }
      return res.status(200).json(recomendation);
    } catch (error) {
      console.error("Erro ao buscar recomendação:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  //ATUALIZAR RECOMENDAÇÃO
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, categoryId, description, rating, imageUrl } = req.body;
      const recomendation = await RecomendationModel.findByPk(id);
      if (!recomendation) {
        return res
          .status(404)
          .json({ message: "Recomendação não encontrada." });
      }

      if (title) recomendation.title = title;
      if (categoryId) recomendation.categoryId = categoryId;
      if (description) recomendation.description = description;
      if (rating) recomendation.rating = rating;
      if (imageUrl) recomendation.imageUrl = imageUrl;
      await recomendation.save();
      return res.status(200).json(recomendation);
    } catch (error) {
      console.error("Erro ao atualizar recomendação:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  //DELETAR RECOMENDAÇÃO
  async delete(req, res) {
    try {
      const { id } = req.params;
      const recomendation = await RecomendationModel.findByPk(id);
      if (!recomendation) {
        return res
          .status(404)
          .json({ message: "Recomendação não encontrada." });
      }
      await recomendation.destroy();
      return res
        .status(200)
        .json({ message: "Recomendação deletada com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar recomendação:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },
};

module.exports = RecomendationController;
