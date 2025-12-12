// routes/RecomendationRoute.js
import express from "express";
import RecomendationController from "../controllers/RecomendationController.js"; // Troca de require para import e adiciona .js
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();

// ROTA PARA CRIAR UMA NOVA RECOMENDAÇÃO
router.post("/", AuthController, RecomendationController.create);

// ROTA PARA BUSCAR TODAS AS RECOMENDAÇÕES
router.get("/", AuthController, RecomendationController.getAll);

// ROTA PARA BUSCAR UMA RECOMENDAÇÃO POR ID
router.get("/:id", AuthController, RecomendationController.getById);

//ROTA PARA ATUALIZAR UMA RECOMENDAÇÃO
router.put("/:id", AuthController, RecomendationController.update);

//ROTA PARA DELETAR UMA RECOMENDAÇÃO
router.delete("/:id", AuthController, RecomendationController.delete);

export default router;
