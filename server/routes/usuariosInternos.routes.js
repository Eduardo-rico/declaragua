const express = require('express');
const router = express.Router();

const {
  login,
  nuevoUsuario,
  mostrarClientes,
  mostrarCliente,
  agregarCliente,
  modificarCliente,
  eliminarCliente
} = require('../controllers/');

router.post('/login', login).post('/nuevoUsuario', nuevoUsuario);

router.route('/usuario').get(mostrarClientes);
router.route('/usuarios/:clienteId').get(mostrarCliente);
router.route('/usuarios/nuevo-cliente').post(agregarCliente);
router.route('/usuarios/:clienteId').put(modificarCliente);
router.route('/usuarios/:clienteId').delete(eliminarCliente);

/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
