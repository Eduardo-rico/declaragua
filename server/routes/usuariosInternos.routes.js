const express = require('express');
const router = express.Router();

const auth = require('../helpers/autenticar');

const {
  login,
  nuevoUsuario,
  mostrarClientes,
  mostrarCliente,
  agregarCliente,
  modificarCliente,
  eliminarCliente
} = require('../controllers/usuariosInternos.controller');

router.post('/login', login).post('/nuevoUsuario', nuevoUsuario);

router.route('/usuarios').get(auth, mostrarClientes);
router.route('/usuarios/:clienteId').get(auth, mostrarCliente);
router.route('/usuarios/nuevo').post(auth, agregarCliente);
router.route('/usuarios/:clienteId').put(auth, modificarCliente);
router.route('/usuarios/:clienteId').delete(auth, eliminarCliente);

/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
