const express = require("express");
const RecomendationController = require("../controllers/RecomendationController");

const router = express.Router();

// ROTA PARA CRIAR UMA NOVA RECOMENDAÇÃO
router.post("/", RecomendationController.create);

// ROTA PARA BUSCAR TODAS AS RECOMENDAÇÕES
router.get("/", RecomendationController.getAll);

// ROTA PARA BUSCAR UMA RECOMENDAÇÃO POR ID
router.get("/:id", RecomendationController.getById);

//ROTA PARA ATUALIZAR UMA RECOMENDAÇÃO
router.put("/:id", RecomendationController.update);

//ROTA PARA DELETAR UMA RECOMENDAÇÃO
router.delete("/:id", RecomendationController.delete);

module.exports = router;
