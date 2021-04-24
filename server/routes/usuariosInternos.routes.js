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

router.options('/login', cors());
router.options('/usuarios', cors());
router.options('/usuarios/:clienteId', cors());
router.options('/usuarios/nuevo', cors());
router.options('/usuarios/:clienteId', cors());
router.options('/usuarios/agregarNota/:clienteId', cors());
router.options('/usuarios/eliminarNota/:notaId', cors());
router.options('/usuarios/:clienteId', cors());

//ruta de login
router.post('/login', login).post('/nuevoUsuario', nuevoUsuario);
// rutas de control de usuarios
router.route('/usuarios').get(auth, mostrarClientes);
router.route('/usuarios/:clienteId').options(cors()).get(auth, mostrarCliente);
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
router.options('/agua', cors());
router.options('/agua/:idAgua', cors());
router.options('/agua/cambiar/:idAgua', cors());
router.options('/agua/crear', cors());
router.options('/agua/borrar/:idAgua', cors());

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
