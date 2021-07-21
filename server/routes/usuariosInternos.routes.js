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

router.route('/usuarios').get(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, mostrarClientes);
router.route('/usuarios/:clienteId').get(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, mostrarCliente);
router.route('/usuarios/nuevo').post(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, agregarCliente);
router.route('/usuarios/:clienteId').put(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, modificarCliente);
router
	.route('/usuarios/agregarNota/:clienteId')
	.put(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, agregarNotaAlCliente);
router
	.route('/usuarios/eliminarNota/:notaId')
	.delete(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, eliminarNotadelCliente);
router.route('/usuarios/:clienteId').delete(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}), auth, eliminarCliente);

const {
	mostrarAguas,
	mostrarAgua,
	cambiarAgua,
	nuevaAgua,
	borrarAgua,
} = require('../controllers/agua.controller');
//usuarios compra-venta de agua
router.get('/agua',cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}),  auth, mostrarAguas);
router.get('/agua/:idAgua',cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}),  auth, mostrarAgua);
router.put('/agua/cambiar/:idAgua',cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}),  auth, cambiarAgua);
router.post('/agua/crear',cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}),  auth, nuevaAgua);
router.delete('/agua/borrar/:idAgua',cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}),  auth, borrarAgua);

router.options(cors({
  "origin": "https://ricosotomayor.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
/**
 * put, patch, delete, get usr/id
 * post usr/create,
 * get usr
 */
module.exports = router;
