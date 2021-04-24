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

router.route('/usuarios').options(cors()).get(auth, mostrarClientes);
router.route('/usuarios/:clienteId').options(cors()).get(auth, mostrarCliente);
router.route('/usuarios/nuevo').options(cors()).post(auth, agregarCliente);
router
	.route('/usuarios/:clienteId')
	.options(cors())
	.put(auth, modificarCliente);
router
	.route('/usuarios/agregarNota/:clienteId')
	.options(cors())
	.put(auth, agregarNotaAlCliente);
router
	.route('/usuarios/eliminarNota/:notaId')
	.options(cors())
	.delete(auth, eliminarNotadelCliente);
router
	.route('/usuarios/:clienteId')
	.options(cors())
	.delete(auth, eliminarCliente);

const {
	mostrarAguas,
	mostrarAgua,
	cambiarAgua,
	nuevaAgua,
	borrarAgua,
} = require('../controllers/agua.controller');
//usuarios compra-venta de agua
router.options(cors()).get('/agua', auth, mostrarAguas);
router.options(cors()).get('/agua/:idAgua', auth, mostrarAgua);
router.options(cors()).put('/agua/cambiar/:idAgua', auth, cambiarAgua);
router.options(cors()).post('/agua/crear', auth, nuevaAgua);
router.options(cors()).delete('/agua/borrar/:idAgua', auth, borrarAgua);

/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
