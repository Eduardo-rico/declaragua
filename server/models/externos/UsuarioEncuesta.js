const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioEncuesta = new Schema({
  nombre: { type: String },
  telefono: { type: String },
  estado: { type: String },
  municipio: { type: String },
  correo: {type: String},
  respuestas: [{ type: mongoose.Types.ObjectId, ref: 'respuestas' }]
});

module.exports = mongoose.model('usuarioEncuesta', UsuarioEncuesta);
