import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Registro from './components/Registro';
import Inicio from './components/Inicio';
import {
  Container,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './logo.svg';

const useStyles = makeStyles({
  paper: {
    paddingBottom: '1.5rem',
    paddingTop: '1.5rem'
  },
  imagen: {
    maxHeight: '50px',
    padding: '2px'
  },
  frag: {
    justifyContent: 'center'
  },
  letterc: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: 'white',
    paddingLeft: '1.5rem'
  },
  span: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '2rem',
    color: 'white'
  },
  slogan: {
    fontFamily: 'Montserrat',
    color: '#999',
    fontStyle: 'italic',
    fontWeight: '100',
    fontSize: '0.6rem'
  },
  divSlogan: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1.5rem'
  },
  aSlogan: {
    textDecoration: 'none'
  }
});

function App() {
  const classes = useStyles();

  const preguntas = ['De que estado nos visitas', 'Te gusta la conagua?'];

  const [respuesta, guardarRespuesta] = useState('');
  const [contador, guardarContador] = useState(0);

  const [idUsuario, guardarIdUsuario] = useState('');

  const [start, saveStart] = useState(true);

  const [inicio, guardarInicio] = useState(false);

  if (contador >= preguntas.length) return <h1>Gracias por participar</h1>;

  return (
    <div className={classes.frag}>
      <AppBar position='static'>
        <Toolbar>
          <Button>
            <img src={Logo} alt='Logo' className={classes.imagen} />
          </Button>
          <span className={classes.letterc}>
            D<span className={classes.span}>eclaragua</span>
          </span>
        </Toolbar>
      </AppBar>
      {inicio ? (
        <Container maxWidth='sm' className='container'>
          <Paper elevation={3} className={classes.paper}>
            {start ? (
              <Grid container justify='center'>
                <Registro
                  saveStart={saveStart}
                  guardarIdUsuario={guardarIdUsuario}
                />
              </Grid>
            ) : (
              <Grid container justify='center'>
                <Formulario
                  guardarRespuesta={guardarRespuesta}
                  respuesta={respuesta}
                  pregunta={preguntas[contador]}
                  guardarContador={guardarContador}
                  contador={contador}
                  idUsuario={idUsuario}
                />
              </Grid>
            )}
          </Paper>
        </Container>
      ) : (
        <Inicio guardarInicio={guardarInicio} />
      )}
      <div className={classes.divSlogan}>
        <span className={classes.slogan}>
          Una aplicación de{' '}
          <a
            href='http://www.tramitesconagua.com/ '
            className={classes.aSlogan}
          >
            www.tramitesconagua.com
          </a>{' '}
          2020 ©
        </span>
      </div>
    </div>
  );
}

export default App;
