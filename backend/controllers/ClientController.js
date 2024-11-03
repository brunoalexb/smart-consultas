const Client = require('../models/client');

// Função para criar um cliente
exports.create = (req, res) => {
  const { name, birthdate, phone, email, address, notes } = req.body;
  Client.create({ name, birthdate, phone, email, address, notes })
    .then(client => res.status(201).send(client))
    .catch(error => res.status(400).send(error));
};


// Função para buscar todos os clientes
exports.findAll = (req, res) => {
  Client.findAll()
    .then(clients => res.status(200).send(clients))
    .catch(error => res.status(500).send({ message: "Erro ao buscar clientes", error }));
};

// Função para buscar cliente por ID
exports.findOne = (req, res) => {
  const { id } = req.params;
  Client.findByPk(id)
    .then(client => {
      if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
      }
      res.status(200).send(client);
    })
    .catch(error => res.status(500).send({ message: "Erro ao buscar cliente", error }));
};

// Função para atualizar cliente por ID
exports.update = (req, res) => {
  const { id } = req.params;
  const { name, birthdate, phone, email, address, notes } = req.body;

  Client.update(
    { name, birthdate, phone, email, address, notes },
    { where: { id } }
  )
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 0) {
        return res.status(404).send({ message: "Cliente não encontrado" });
      }
      res.status(200).send({ message: "Cliente atualizado com sucesso" });
    })
    .catch(error => res.status(500).send({ message: "Erro ao atualizar cliente", error }));
};

// Função para deletar cliente por ID
exports.delete = (req, res) => {
  const { id } = req.params;

  Client.destroy({ where: { id } })
    .then(rowsDeleted => {
      if (rowsDeleted === 0) {
        return res.status(404).send({ message: "Cliente não encontrado" });
      }
      res.status(200).send({ message: "Cliente deletado com sucesso" });
    })
    .catch(error => res.status(500).send({ message: "Erro ao deletar cliente", error }));
};