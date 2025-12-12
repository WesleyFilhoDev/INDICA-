import express from "express";
import RecomendationController from "../controllers/RecomendationController.js";
import { authMiddleware } from "../middlewares/Authentication.js";

const router = express.Router();

router.post("/", authMiddleware, RecomendationController.create);
router.get("/", authMiddleware, RecomendationController.getAll);
router.get("/:id", authMiddleware, RecomendationController.getById);
router.put("/:id", authMiddleware, RecomendationController.update);
router.delete("/:id", authMiddleware, RecomendationController.delete);

export default router;
