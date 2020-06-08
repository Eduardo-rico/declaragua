const login = (req, res) => {
  //TODO:
  //1.- verificar que el usuario existe
  //2.- si existe hacer un jwt con un payload llamado usuario con un _id = usuario._id de mongo
};
const nuevoUsuario = (req, res) => {
  //TODO crear un usuario en la db
};
const mostrarClientes = (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente
};
const mostrarCliente = (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId
};
const agregarCliente = (req, res) => {
  //TODO crear un cliente en la db cuando el usuario esta autenticado, con el payload del jwt se crea req.usuarioId y esto se guarda en el cliente nuevo como creadoPor: req.usuarioId
};
const modificarCliente = (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId
  //cambia por lo menos el nombre
};
const eliminarCliente = (req, res) => {
  //TODO busca los clientes cuando el id del usuario es igual al creadoPor del cliente y el id del cliente es igual al que viene el req.props.clienteId y lo elimina/desactiva(para mantener datos historicos)
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
