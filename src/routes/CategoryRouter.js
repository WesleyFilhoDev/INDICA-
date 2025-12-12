// routes/CategoryRouter.js
import express from "express";
import CategoryController from "../controllers/CategoryController.js"; // Troca de require para import e adiciona .js
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();

// ROTA PARA BUSCAR TODAS AS CATEGORIAS
router.get("/", AuthController, CategoryController.getAll);

export default router; // Adicione o export default
