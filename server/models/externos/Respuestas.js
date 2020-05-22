const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Respuestas = new Schema({
  pregunta: String,
  respuesta: String,
  userId: { type: mongoose.Types.ObjectId, ref: 'usuarioEncuesta' }
});

module.exports = mongoose.model('respuestas', Respuestas);
