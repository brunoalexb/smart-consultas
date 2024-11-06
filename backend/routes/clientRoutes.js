const express = require('express');
const router = express.Router();
const clientController = require('../controllers/ClientController');


router.post('/clients', async(req, res) => {
    try{
        const client = req.body;
        const result = await clientController.create(client);
        res.status(201).json(result);
    } catch(error){
        res.status(400).send(error)
    }
    
});


router.get('/clients', async(req, res) => {
    try{
        const clients = await clientController.findAll();
        res.status(200).json(clients);
    }catch (error){
        res.status(500).send({message: "Erro ao buscar clientes", error});
    }

});


router.get('/clients/:id', async(req, res) =>{
    try{
        const { id } = req.params;
        const client = await clientController.findOne(id);
        res.status(200).json(client);
    }catch(error){
        res.status(500).send({message: "Erro ao buscar cliente", error});
    }
});

router.put('/clients/:id', async(req, res) =>{
    try{
        const { id } = req.params;
        const clientData = req.body;
        const result = await clientController.update(id, clientData)
        res.status(200).json(result);
    }catch(error){
        res.status(500).send({message: "Erro ao atualizar cliente", error});
    }
    
});


router.delete('/clients/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const client = await clientController.delete(id);
        res.status(200).json(client);
    }catch(error){
        res.status(500).send({message: "Erro ao deletar cliente", error});
    }
});

module.exports = router;
