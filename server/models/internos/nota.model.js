const mongoose = require("mongoose");

const NotaSchema = new mongoose.Schema({
  nota: String,
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  perteneceAlCliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
});

module.exports = mongoose.model("Nota", NotaSchema);
