const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  clientes: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
