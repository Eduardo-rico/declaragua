const express = require('express');
const router = express.Router();

const {
  create,
  agregarRespuesta,
  mostrarUsuario,
  mostrarUsuarios,
  mostrarRespuestasDeUsuario
} = require('../controllers/usuariosExternos.controller');

router.route('/agregarUsuario').post(create);
router.route('/agregarRespuesta').post(agregarRespuesta);
router.route('/usuario/:userId').get(mostrarUsuario);
router.route('/usuarios/').get(mostrarUsuarios);
router.route('/usuarios/respuestas/:userId').get(mostrarRespuestasDeUsuario);

module.exports = router;
