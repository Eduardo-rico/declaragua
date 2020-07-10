const mongoose = require("mongoose");

const AguaSchema = new mongoose.Schema({
  volumen: { type: Number },
  acuifero: {
    type: String,
    enum: [
      "Ciénega Prieta - Moroleón",
      "Cuenca Alta del Río Laja",
      "Dr. Mora - San José Iturbide",
      "Irapuato - Valle",
      "Jaral de Berrios - Villa de Reyes",
      "La Muralla",
      "Lago de Cuitzeo",
      "Laguna Seca",
      "Ocampo",
      "Pénjamo - Abasolo",
      "Río Turbio",
      "Salvatierra - Acambaro",
      "San Miguel de Allende",
      "Santa María",
      "Silao - Romita",
      "Valle de Acámbaro",
      "Valle de Celaya",
      "Valle de la Cuevita",
      "Valle de Leon",
      "Xichú - Atarjea",
      "No Especificado",
    ],
    default: "No Especificado",
  },
  precio: { type: String },
  vendedor: { type: String },
  posiblesCompradores: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  observaciones: [{ type: String }],
  vendeOcompra: Boolean,
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
});

module.exports = mongoose.model("Agua", AguaSchema);
