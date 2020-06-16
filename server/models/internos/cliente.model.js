const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rfc: String,
  fechaMaxima: { type: Date },
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  nombreConagua: String,
  passwordConagua: String,
  numTitulo: String,
  numSolicitud: String,
  ciudad: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);
