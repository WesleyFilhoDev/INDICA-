// routes/UserRoute.js
import express from "express";
import UserController from "../controllers/UserController.js"; // Adicione .js
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();

// ROTA PARA CRIAR UM NOVO USUÁRIO
router.post("/", AuthController, UserController.create);

// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", AuthController, UserController.getAll);

// ROTA PARA BUSCAR UM USUÁRIO POR ID
router.get("/:id", AuthController, UserController.getById);

//ATUALIZAR O USUÁRIO
router.put("/:id", AuthController, UserController.update);

//DELETAR O USUÁRIO
router.delete("/:id", AuthController, UserController.delete);

export default router; // Troca de module.exports
