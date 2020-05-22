const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({});

module.exports = mongoose.model('Usuario', UsuarioSchema);
