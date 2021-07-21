const express = require('express');
const router = express.Router();
const cors = require("cors")
const auth = require('../helpers/autenticar');

const {
	login,
	nuevoUsuario,
	mostrarClientes,
	mostrarCliente,
	agregarCliente,
	modificarCliente,
	eliminarCliente,
	agregarNotaAlCliente,
	eliminarNotadelCliente,
} = require('../controllers/usuariosInternos.controller');

router.post('/login', login).post('/nuevoUsuario', nuevoUsuario);

router.route('/usuarios').get(cors(), auth, mostrarClientes);
router.route('/usuarios/:clienteId').get(cors(), auth, mostrarCliente);
router.route('/usuarios/nuevo').post(cors(), auth, agregarCliente);
router.route('/usuarios/:clienteId').put(cors(), auth, modificarCliente);
router
	.route('/usuarios/agregarNota/:clienteId')
	.put(cors(), auth, agregarNotaAlCliente);
router
	.route('/usuarios/eliminarNota/:notaId')
	.delete(cors(), auth, eliminarNotadelCliente);
router.route('/usuarios/:clienteId').delete(cors(), auth, eliminarCliente);

const {
	mostrarAguas,
	mostrarAgua,
	cambiarAgua,
	nuevaAgua,
	borrarAgua,
} = require('../controllers/agua.controller');
//usuarios compra-venta de agua
router.get('/agua',cors(),  auth, mostrarAguas);
router.get('/agua/:idAgua',cors(),  auth, mostrarAgua);
router.put('/agua/cambiar/:idAgua',cors(),  auth, cambiarAgua);
router.post('/agua/crear',cors(),  auth, nuevaAgua);
router.delete('/agua/borrar/:idAgua',cors(),  auth, borrarAgua);

router.options(cors())
/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
