// routes/CategoryRouter.js
import express from "express";
import CategoryController from "../controllers/CategoryController.js"; // Troca de require para import e adiciona .js

const router = express.Router();

// ROTA PARA BUSCAR TODAS AS CATEGORIAS
router.get("/", CategoryController.getAll);

export default router; // Adicione o export default
