const express = require("express");
const UserController = require("../controllers/UserController");

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

module.exports = router;
