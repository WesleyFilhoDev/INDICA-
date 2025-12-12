import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import { authMiddleware } from "../middlewares/Authentication.js";

const router = express.Router();

router.get("/", authMiddleware, CategoryController.getAll);

export default router;
