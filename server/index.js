//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
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
	},
	() => {
		console.log('db conectada');
		app.listen(port, () => {
			console.log(`Servidor arriba en http://localhost:${port}/`);
			const timeElapsed = Date.now();
			const today = new Date(timeElapsed);
			console.log(`La fecha: ${today.toUTCString()}`);
		});
	}
);

const app = express();

//constantes
const port = 3001;
const corsOptions = { origin: false };

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
//rutas
app.options('*', cors(corsOptions));
app.use('/', usuarioRouter);
app.use('/plataforma', usuarioInternosRouter);

//listen

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
});
