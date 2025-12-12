import express from "express";
import UserController from "../controllers/UserController.js";
import { authMiddleware } from "../middlewares/Authentication.js";

const router = express.Router();

// Criar usuário (não precisa estar logado)
router.post("/", UserController.create);

// Rotas protegidas
router.get("/", authMiddleware, UserController.getAll);
router.get("/:id", authMiddleware, UserController.getById);
router.put("/:id", authMiddleware, UserController.update);
router.delete("/:id", authMiddleware, UserController.delete);

export default router;
