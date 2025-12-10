// routes/RecomendationRoute.js
import express from "express";
import RecomendationController from "../controllers/RecomendationController.js"; // Troca de require para import e adiciona .js

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

export default router;
