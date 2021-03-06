//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Dependencias internas
const usuarioRouter = require('./routes/usuariosExternos.routes');
const usuarioInternosRouter = require('./routes/usuariosInternos.routes');

//inicializaciones
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('db conectada');
    app.listen(port, () => {
      console.log(`Servidor arriba en http://localhost:${port}/`);
    });
  }
);

const app = express();

//constantes
const port = 3001;

//middlewares
app.use(bodyParser.json());
app.use(cors());
//rutas

app.use('/', usuarioRouter);
app.use('/plataforma', usuarioInternosRouter);

//listen

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});
