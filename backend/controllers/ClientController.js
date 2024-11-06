const Client = require('../models/client');


exports.create = (client) => {
  const { name, birthdate, phone, email, address, notes } = client;
  return Client.create({name, birthdate, phone, email, address, notes});
}

// Função para buscar todos os clientes
exports.findAll = () => {
  return Client.findAll();
};

// Função para buscar cliente por ID
exports.findOne = (id) =>{
  return Client.findByPk(id);
};


// Função para atualizar cliente por ID
exports.update = (id, clientData) => {
  return Client.update(clientData, {where: {id}});
};


// Função para deletar cliente por ID
exports.delete = (id) => {
  return Client.destroy({ where: { id } });
};