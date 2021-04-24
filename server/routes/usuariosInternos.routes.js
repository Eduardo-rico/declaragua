const express = require('express');
const cors = require('cors');
const router = express.Router();

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
router.route('*').options(cors());
router.post('/login', login).post('/nuevoUsuario', nuevoUsuario);

router.route('/usuarios').get(auth, mostrarClientes);
router.route('/usuarios/:clienteId').get(auth, mostrarCliente);
router.route('/usuarios/nuevo').post(auth, agregarCliente);
router.route('/usuarios/:clienteId').put(auth, modificarCliente);
router
	.route('/usuarios/agregarNota/:clienteId')
	.put(auth, agregarNotaAlCliente);
router
	.route('/usuarios/eliminarNota/:notaId')
	.delete(auth, eliminarNotadelCliente);
router.route('/usuarios/:clienteId').delete(auth, eliminarCliente);

const {
	mostrarAguas,
	mostrarAgua,
	cambiarAgua,
	nuevaAgua,
	borrarAgua,
} = require('../controllers/agua.controller');
//usuarios compra-venta de agua
router.get('/agua', auth, mostrarAguas);
router.get('/agua/:idAgua', auth, mostrarAgua);
router.put('/agua/cambiar/:idAgua', auth, cambiarAgua);
router.post('/agua/crear', auth, nuevaAgua);
router.delete('/agua/borrar/:idAgua', auth, borrarAgua);

/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
