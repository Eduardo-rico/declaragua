const UsuarioEncuesta = require('../models/externos/UsuarioEncuesta');
const Respuestas = require('../models/externos/Respuestas');

const create = async (req, res) => {
  const { nombre, telefono, estado, correo } = req.body;
  const nuevoUsuario = await UsuarioEncuesta.create({
    nombre,
    telefono,
    estado,
    correo
  });
  res.status(200).json(nuevoUsuario);
};

const agregarRespuesta = async (req, res) => {
  const { pregunta, respuesta, id } = req.body;
  const usrRespuesta = await Respuestas.create({
    pregunta,
    respuesta,
    userId: id
  });
  const resultado = await UsuarioEncuesta.findByIdAndUpdate(
    id,
    {
      $push: { respuestas: usrRespuesta._id }
    },
    { new: true }
  ).populate('respuestas');
  //.select(' -_id ');
  res.status(200).json(resultado);
};

const mostrarUsuario = async (req, res) => {
  const { userId } = req.params;
  const resultado = await UsuarioEncuesta.findById({ _id: userId }).populate(
    'respuestas'
  );
  res.status(200).json(resultado);
};
const mostrarRespuestasDeUsuario = async (req, res) => {
  const { userId } = req.params;
  const resultado = await UsuarioEncuesta.findById({ _id: userId }).populate(
    'respuestas'
  );
  res.status(200).json(resultado.respuestas);
};

const mostrarUsuarios = async (req, res) => {
  const usuario = await UsuarioEncuesta.find();

  res.status(200).json(usuario);
};

module.exports = {
  create,
  agregarRespuesta,
  mostrarUsuario,
  mostrarRespuestasDeUsuario,
  mostrarUsuarios
};
