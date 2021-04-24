const express = require('express');
const cors = require('cors');
const router = express.Router();

const {
	create,
	agregarRespuesta,
	mostrarUsuario,
	mostrarUsuarios,
	mostrarRespuestasDeUsuario,
} = require('../controllers/usuariosExternos.controller');
router.route('*').options(cors());
router.route('/agregarUsuario').options(cors()).post(create);
router.route('/agregarRespuesta').options(cors()).post(agregarRespuesta);
router.route('/usuario/:userId').options(cors()).get(mostrarUsuario);
router.route('/usuarios/').options(cors()).get(mostrarUsuarios);
router
	.route('/usuarios/respuestas/:userId')
	.options(cors())
	.get(mostrarRespuestasDeUsuario);

module.exports = router;
