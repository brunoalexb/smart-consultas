const express = require('express');
const router = express.Router();
const clients = require('../controllers/ClientController');

router.post('/clients', clients.create);
router.get('/clients', clients.findAll);
router.get('/clients/:id', clients.findOne);
router.put('/clients/:id', clients.update);
router.delete('/clients/:id', clients.delete);

module.exports = router;
