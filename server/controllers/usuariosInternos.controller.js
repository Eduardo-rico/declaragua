const Cliente = require('../models/internos/cliente.model');
const Usuario = require('../models/internos/usuario.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  //TODO:
  //1.- verificar que el usuario existe
  //2.- si existe hacer un jwt con un payload llamado usuario con un _id = usuario._id de mongo
  const { email, password } = req.body;
  const usuarioEncontrado = await Usuario.findOne({ email });
  if (!email || !usuarioEncontrado) {
    res.status(404).json({ Error: 'Usuario no encontrado' });
  } else {
    const compararPassword = await bcrypt.compare(
      password,
      usuarioEncontrado.password
    );

    if (compararPassword) {
      const token = jwt.sign({ usuarioEncontrado }, process.env.SECRETO, {
        expiresIn: '24h'
      });
      res.status(202).json({
        Mensaje: 'Bienvenido, ahi va el token',
        token
      });
    } else {
      res.status(400).json({ Error: 'Password Invalido' });
    }
  }
};

const nuevoUsuario = async (req, res) => {
  //TODO crear un usuario en la db
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    res
      .status(400)
      .json({ Error: 'Nombre, email y password son oblicatorios' });
  } else {
    const passwordEncriptado = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.create({
      nombre,
      email,
      password: passwordEncriptado
    });

    if (nuevoUsuario) {
      res.status(201).json({ Mensaje: 'Usuario creado correctamente' });
    } else {
      res.status(500).json({ Error: 'Error al crear el usuario' });
    }
  }
};

const mostrarClientes = async (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente
  //lo sacas el auth como: usuarioId
  const { usuarioId } = req;
  if (!usuarioId) {
    res.status(404).json({ Error: 'Error en el usuario' });
  }

  const clientesDeUsuarios = await Cliente.find({
    creadoPor: usuarioId
  }); //.populate('creadoPor');
  if (!clientesDeUsuarios) {
    res.status(404).json({ Error: 'No tienes ningun usuario' });
  }
  res.status(200).json({ Mensaje: clientesDeUsuarios });
};

const mostrarCliente = async (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId
  const { clienteId } = req.params;
  const { usuarioId } = req;
  if (!clienteId) {
    res.status(404).json({ Error: 'Error en el cliente' });
  }
  try {
    const clienteDeUsuario = await Cliente.findById({
      _id: clienteId,
      creadoPor: usuarioId
    });
    if (!clienteDeUsuario) {
      res
        .status(404)
        .json({ Error: 'Error al mostrar el usuario, usuario no encontrado' });
    } else {
      res.status(200).json({ Mensaje: clienteDeUsuario });
    }
  } catch (error) {
    res
      .status(404)
      .json({ Error: 'Error al mostrar el usuario, usuario no encontrado' });
  }
};
const agregarCliente = async (req, res) => {
  //TODO crear un cliente en la db cuando el usuario esta autenticado, con el payload del jwt se crea req.usuarioId y esto se guarda en el cliente nuevo como creadoPor: req.usuarioId
  // const {
  //   nombre,
  //   rfc,
  //   fechaMaxima,
  //   nombreConagua,
  //   passwordConagua,
  //   numTitulo,
  //   numSolicitud,
  //   ciudad,
  //   estatus
  // } = req.body;
  const { usuarioId } = req;
  try {
    const nuevoCliente = await Cliente.create({
      ...req.body,
      creadoPor: usuarioId
    });

    await Usuario.findByIdAndUpdate(
      { _id: usuarioId },
      { $push: { clientes: nuevoCliente } }
    ); //.populate('clientes'); SE MODIFICA EL USUARIO PARA MOSTRAR ARRAY DE CLIENTES
    res.status(200).json({ nuevoCliente });
  } catch (error) {
    res
      .status(500)
      .json({ Error: 'No se creo el cliente', error: error.message });
    console.log('error en crear usuario', error);
  }
};
const modificarCliente = async (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId
  //cambia por lo menos el nombre
  // const {
  //   nombre,
  //   rfc,
  //   fechaMaxima,
  //   nombreConagua,
  //   passwordConagua,
  //   numTitulo,
  //   numSolicitud,
  //   ciudad
  // } = req.body;
  const { clienteId } = req.params;
  const { usuarioId } = req;
  try {
    const clienteCambiado = await Cliente.findOneAndUpdate(
      { _id: clienteId, creadoPor: usuarioId },
      // {
      //   nombre,
      //   rfc,
      //   fechaMaxima,
      //   nombreConagua,
      //   passwordConagua,
      //   numTitulo,
      //   numSolicitud,
      //   ciudad
      // },
      { ...req.body },
      { new: true }
    );
    if (!clienteCambiado) {
      res.status(404).json({ Error: 'Usuario no modificado' });
    } else {
      res.status(200).json({ clienteCambiado });
    }
  } catch (error) {
    res.status(500).json({ Error: 'Usuario no modificado', error });
  }
};

const eliminarCliente = async (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId y lo elimina/desactiva(para mantener datos historicos)
  const { clienteId } = req.params;
  const { usuarioId } = req;
  if (!clienteId || !usuarioId) {
    res.status(404).json({ Error: 'Error al eliminar el cliente' });
  }
  try {
    const clienteEliminado = await Cliente.findOneAndDelete({
      _id: clienteId,
      creadoPor: usuarioId
    });
    if (!clienteEliminado) {
      res.status(404).json({ Error: 'Usuario no eliminado' });
    }
    res.status(200).json({ Mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ Error: 'Usuario no eliminado', error });
  }
};

module.exports = {
  login,
  nuevoUsuario,
  mostrarClientes,
  mostrarCliente,
  agregarCliente,
  modificarCliente,
  eliminarCliente
};
