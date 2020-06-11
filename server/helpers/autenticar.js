const jwt = require('jsonwebtoken');
require('dotenv').config();

const autenticar = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ Mensaje: 'No autenticado, inicia sesión' });
    }
    token = token.split(' ')[1];
    const payload = jwt.verify(token, process.env.SECRETO);
    if (!payload) {
      res.status(401).json({
        Mensaje: 'No autenticado, o sesión expirada, inicia sesión  no payload'
      });
    } else {
      req.usuarioId = payload.usuarioEncontrado._id;
      next();
    }
  } catch (error) {
    res.status(401).json({
      Mensaje: 'No autenticado, o sesión expirada, inicia sesión catch',
      error
    });
  }
};

module.exports = autenticar;
