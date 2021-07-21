const express = require('express');
const router = express.Router();

const auth = require('../helpers/autenticar');
const cors = require('../helpers/cors');

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
router.route('/usuarios').options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
router.route('/usuarios').get(cors.corsWithOptions, auth, mostrarClientes);
router.route('/usuarios/:clienteId').get(cors.corsWithOptions, auth, mostrarCliente);
router.route('/usuarios/nuevo').post(cors.corsWithOptions, auth, agregarCliente);
router.route('/usuarios/:clienteId').put(cors.corsWithOptions, auth, modificarCliente);
router
	.route('/usuarios/agregarNota/:clienteId')
	.put(cors.corsWithOptions, auth, agregarNotaAlCliente);
router
	.route('/usuarios/eliminarNota/:notaId')
	.delete(cors.corsWithOptions, auth, eliminarNotadelCliente);
router.route('/usuarios/:clienteId').delete(auth, eliminarCliente);

const {
	mostrarAguas,
	mostrarAgua,
	cambiarAgua,
	nuevaAgua,
	borrarAgua,
} = require('../controllers/agua.controller');
//usuarios compra-venta de agua
router.get('/agua',cors.corsWithOptions, auth, mostrarAguas);
router.get('/agua/:idAgua',cors.corsWithOptions, auth, mostrarAgua);
router.put('/agua/cambiar/:idAgua',cors.corsWithOptions, auth, cambiarAgua);
router.post('/agua/crear',cors.corsWithOptions, auth, nuevaAgua);
router.delete('/agua/borrar/:idAgua',cors.corsWithOptions, auth, borrarAgua);

/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
