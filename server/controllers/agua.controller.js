const Usuario = require("../models/internos/usuario.model");
const Agua = require("../models/internos/agua.model");

const mostrarAguas = async (req, res) => {
  const { usuarioId } = req;
  if (!usuarioId) {
    res.status(404).json({ Error: "Error en el usuario" });
  } else {
    const aguasCompraVentaDelUsuario = await Agua.find(
      { creadoPor: usuarioId },
    );
    res.status(200).json({ Mensaje: aguasCompraVentaDelUsuario });
  }
};
const mostrarAgua = async (req, res) => {
  const { usuarioId } = req;
  const { idAgua } = req.params;
  const aguaEspecificaDelUsuario = await Agua.findById(
    { _id: idAgua, creadoPor: usuarioId },
  );
  res.status(200).json({ Mensaje: aguaEspecificaDelUsuario });
};
const cambiarAgua = async (req, res) => {
  const { usuarioId } = req;
  const { idAgua } = req.params;
  const aguaCambiar = await Agua.findByIdAndUpdate(
    { _id: idAgua, creadoPor: usuarioId },
    { ...req.body },
    { new: true },
  );
  res.status(200).json({ Mensaje: aguaCambiar });
};
const nuevaAgua = async (req, res) => {
  const { usuarioId } = req;
  const nuevaAgua = await Agua.create({ ...req.body, creadoPor: usuarioId });
  await Usuario.findByIdAndUpdate(
    { _id: usuarioId },
    { $push: { aguaCompraVenta: nuevaAgua } },
  );
  res.status(200).json({ Mensaje: nuevaAgua });
};
const borrarAgua = async (req, res) => {
  const { usuarioId } = req;
  const { idAgua } = req.params;
  await Agua.findByIdAndDelete({ _id: idAgua, creadoPor: usuarioId });
  res.status(200).json({ Mensaje: "Compra-Venta Eliminada" });
};

module.exports = {
  mostrarAguas,
  mostrarAgua,
  cambiarAgua,
  nuevaAgua,
  borrarAgua,
};
