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

router.route('/agregarUsuario').options(cors());
router.route('/agregarRespuesta').options(cors());
router.route('/usuario/:userId').options(cors());
router.route('/usuarios/').options(cors());
router.route('/usuarios/respuestas/:userId').options(cors());

router.route('/agregarUsuario').post(create);
router.route('/agregarRespuesta').post(agregarRespuesta);
router.route('/usuario/:userId').get(mostrarUsuario);
router.route('/usuarios/').get(mostrarUsuarios);
router.route('/usuarios/respuestas/:userId').get(mostrarRespuestasDeUsuario);

module.exports = router;
