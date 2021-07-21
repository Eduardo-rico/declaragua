//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

//Dependencias internas
const usuarioRouter = require('./routes/usuariosExternos.routes');
const usuarioInternosRouter = require('./routes/usuariosInternos.routes');

//inicializaciones
mongoose.connect(
        process.env.MONGODB_URI,
        {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
        }
).then(() => {
	console.log('db conectada');
	app.listen(port, () => {
			console.log(`Servidor arriba en http://localhost:${port}/`);
			const timeElapsed = Date.now();
			const today = new Date(timeElapsed);
			console.log(`La fecha: ${today.toUTCString()}`);
	});
}).catch(e => console.log(e))

const app = express();

//constantes
const port = 3001;

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// use it before all route definitions
app.all('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://ricosotomayor.com");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PATCH,POST,PUTS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.options('*', cors())
app.use('/',usuarioRouter);
app.use('/plataforma', usuarioInternosRouter);

//listen
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
        res.sendFile(__dirname + 'index.html');
});