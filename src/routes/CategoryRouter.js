const express = require("express");
const CategoryController = require("../controllers/CategoryController");

const router = express.Router();

// ROTA PARA BUSCAR TODAS AS CATEGORIAS
router.get("/", CategoryController.getAll);
