const bcrypt = require('bcrypt');
const User = require('../models/User'); // Modelo de usuário

const AuthController = {
  // Função para criar um novo usuário
  createUser: async (user) => {
    const { email, password, username } = user;
    return User.create({ email, password, username });  // O hashing da senha já ocorre no modelo
  },


  // Função para login
  loginUser: async ({ email, password }) => {
    // Encontra o usuário pelo email
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return null; // Retorna null se o usuário não for encontrado
    }

    return user; // Retorna o usuário se encontrado
  }
};

module.exports = AuthController;

