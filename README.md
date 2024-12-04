# Smart Consultas 🩺

Este projeto é uma aplicação backend e frontend para gerenciamento de clientes e usuários em uma plataforma de consultas, desenvolvido utilizando **Node.js**, **Sequelize** e outras tecnologias.

## Funcionalidades ✨

- Cadastro de **Usuários** com autenticação.
- CRUD completo para **Clientes**, incluindo:
  - Adicionar, listar, atualizar e excluir clientes.
  - Relacionamento entre usuários e clientes (um usuário pode ser associado a vários clientes).
- Sistema de rotas organizado e modularizado.

## Tecnologias Utilizadas 🛠️

- **Node.js**  
- **Express**  
- **Sequelize**  
- **MySQL**  
- **Frontend com React**

## Estrutura do Projeto 📂

```plaintext
backend/
├── controllers       # Controladores das rotas
├── db                # Configurações do banco de dados
├── models            # Modelos Sequelize
├── routes            # Rotas organizadas por recurso
├── .env.example      # Exemplo de variáveis de ambiente
frontend/
├── smart-consultasfront  # Frontend da aplicação
```

### Configuração do Projeto ⚙️
**Pré-requisitos**
Node.js instalado (v16 ou superior).
MySQL Server configurado.
Uma ferramenta de requisições como Insomnia ou Postman.

### Configuração do Banco de Dados
Edite o arquivo .env com as informações do banco de dados:
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=smart_consultas
DB_PORT=PORT

### Rodando o Projeto
1. Clone esse repositório:
git clone https://github.com/seu-usuario/smart-consultas.git

2. Instale as dependências:
cd backend
npm install

3. Inicie o servidor com nodemon:
npm start


Endpoints da API 🛣️

### Endpoints para Usuários
- **POST** `/auth/register` - Registrar um novo usuário.
- **POST** `/auth/login` - Autenticar um usuário.

### Endpoints para Clientes
- **POST** `/clients` - Adicionar um novo cliente.
- **GET** `/clients` - Listar todos os clientes.
- **GET** `/clients/{id}` - Buscar um cliente pelo ID.
- **PUT** `/clients/{id}` - Atualizar informações de um cliente.
- **DELETE** `/clients/{id}` - Excluir um cliente.


### Autor 🧑‍💻
Projeto desenvolvido por Bruno Alexandre. Entre em contato pelo e-mail: brunoale77@gmail.com.
