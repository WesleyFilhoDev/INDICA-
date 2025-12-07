const User = require("../models/UserModel");
const bcrypt = require("../services/bcrypt"); // seu serviço de hash

const UserController = {
  // CRIA UM NOVO USUÁRIO
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios." });
      }

      // Verifica se o email já existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: "Email já cadastrado." });
      }

      // Criptografa a senha
      const hashedPassword = await bcrypt.hashPassword(password);

      // Cria o usuário
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res
        .status(201)
        .json({ message: "Usuário criado com sucesso.", userId: newUser.id });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  // BUSCA TODOS OS USUÁRIOS
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  // BUSCA USUÁRIO POR ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  // ATUALIZA USUÁRIO POR ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      if (name) user.name = name;
      if (email) user.email = email;
      if (password) {
        user.password = await bcrypt.hashPassword(password);
      }

      await user.save();
      return res
        .status(200)
        .json({ message: "Usuário atualizado com sucesso." });
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },

  // DELETA USUÁRIO POR ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      await user.destroy();
      return res.status(200).json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  },
};

module.exports = UserController;
