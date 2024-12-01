const express = require("express");
const router = express.Router();
const UserRepository = require("../repository/user");

// Retornar todos os usuários
router.get("/", async (_, res) => {
  try {
    const users = await UserRepository.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retornar um usuário pelo ID
router.get("/:id", async (req, res) => {
  try {
    const user = await UserRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar um usuário
router.post("/", async (req, res) => {
  try {
    const user = await UserRepository.create(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar um usuário
router.put("/:id", async (req, res) => {
  try {
    // Remove campos undefined ou null
    const userData = {};
    if (req.body.name !== undefined) userData.name = req.body.name;
    if (req.body.email !== undefined) userData.email = req.body.email;
    if (req.body.password !== undefined) userData.password = req.body.password;

    // Verifica se há algum campo para atualizar
    if (Object.keys(userData).length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    const user = await UserRepository.updateUser(req.params.id, userData);
    res.json(user);
  } catch (error) {
    if (error.message === "Usuário não encontrado") {
      return res.status(404).json({ error: error.message });
    }
    if (error.message === "Este email já está em uso") {
      return res.status(409).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});

// Deletar um usuário
router.delete("/:id", async (req, res) => {
  try {
    const user = await UserRepository.delete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
