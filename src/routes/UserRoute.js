// routes/UserRoute.js
import express from "express";
import UserController from "../controllers/UserController.js"; // Adicione .js

const router = express.Router();

// ROTA PARA CRIAR UM NOVO USUÁRIO
router.post("/", UserController.create);

// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", UserController.getAll);

// ROTA PARA BUSCAR UM USUÁRIO POR ID
router.get("/:id", UserController.getById);

//ATUALIZAR O USUÁRIO
router.put("/:id", UserController.update);

//DELETAR O USUÁRIO
router.delete("/:id", UserController.delete);

export default router; // Troca de module.exports
