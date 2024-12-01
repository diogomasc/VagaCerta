const User = require("../models/user");

class UserRepository {
  async create(name, email, password) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  async findById(id) {
    const user = await User.findByPk(id);
    return user;
  }

  async findAll() {
    const users = await User.findAll();
    return users;
  }

  async delete(id) {
    const user = await this.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    await user.destroy();
    return user;
  }

  async updateUser(id, userData) {
    const user = await this.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Verificar se o email já está em uso por outro usuário
    if (userData.email && userData.email !== user.email) {
      const existingUserWithEmail = await User.findOne({
        where: { email: userData.email },
      });

      if (existingUserWithEmail && existingUserWithEmail.id !== id) {
        throw new Error("Este email já está em uso");
      }
    }

    // Atualiza apenas os campos fornecidos
    await user.update(userData);

    return user;
  }
}

module.exports = new UserRepository();
