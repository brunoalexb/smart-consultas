const express = require('express')
const router = express.Router()
const AuthController= require('../controllers/AuthController')
const { body, validationResult } = require('express-validator');


router.post(
    '/login',
    // Validação dos dados de entrada
    [
      body('email').isEmail().withMessage('Email inválido'),
      body('password').notEmpty().withMessage('Senha é obrigatória'),
    ],
    async (req, res) => {
      // Verifica se há erros na validação
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        // Chama o controller de login para encontrar o usuário
        const user = await AuthController.loginUser({ email, password });
  
        if (!user) {
          return res.status(401).json({ message: 'Credenciais inválidas' });
        }
  
        // Compara a senha fornecida com a armazenada no banco
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Credenciais inválidas' });
        }
  
        // Gerar o token JWT
        const token = jwt.sign(
          { id: user.id, username: user.username, email: user.email },
          JWT_SECRET_KEY, // Sua chave secreta configurada no .env
          { expiresIn: '1h' } // O token expira em 1 hora
        );
  
        return res.status(200).json({
          message: 'Login bem-sucedido',
          token, // Retorna o token JWT para o cliente
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao realizar o login', error: error.message });
      }
    }
  );

router.post(
    '/register',
    // Validação dos dados da requisição
    [
      body('email').isEmail().withMessage('Email inválido'),
      body('password')
        .isLength({ min: 6 })
        .withMessage('A senha deve ter no mínimo 6 caracteres'),
      body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    ],
    async (req, res) => {
      // Verifica se há erros na validação
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // Cria o usuário chamando o controller
        const newUser = await AuthController.createUser(req.body);
        return res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar o usuário', error: error.message });
      }
    }
  );

  module.exports = router;