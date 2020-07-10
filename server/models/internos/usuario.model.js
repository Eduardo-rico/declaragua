const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cliente" }],
  aguaCompraVenta: [{ type: mongoose.Schema.Types.ObjectId, ref: "Agua" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
