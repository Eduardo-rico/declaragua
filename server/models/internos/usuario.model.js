const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cliente" }],
  aguaCompraVenta: [{ type: mongoose.Schema.Types.ObjectId, ref: "Agua" }],
  createdAt: { type: Date, default: Date.now },
  notas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Nota" }],
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
