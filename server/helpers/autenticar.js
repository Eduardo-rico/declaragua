const jwt = require('jsonwebtoken');

const autenticar = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ mensaje: 'No autenticado, inicia sesión' });
    }
    token = token.split(' ')[1];
    const payload = jwt.verify(token, process.env.SECRET);
    if (!payload) {
      res
        .status(401)
        .json({ mensaje: 'No autenticado, o sesión expirada, inicia sesión' });
    } else {
      req.usuarioId = payload.usuario._id; //TODO: hacer token al hacer login
      next();
    }
  } catch (error) {
    res.status(401).json({
      mensaje: 'No autenticado, o sesión expirada, inicia sesión',
      error
    });
  }
};

module.exports = autenticar;
