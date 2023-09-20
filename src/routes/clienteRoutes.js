const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// Rutas para libros
router.get('/clientes', ClienteController.getAllClientes);
router.get('/clientes/:id', ClienteController.getClienteById);
router.post('/clientes', ClienteController.createCliente);
router.put('/clientes/:id', ClienteController.updateCliente);
router.delete('/clientes/:id', ClienteController.deleteCliente);

module.exports = router;