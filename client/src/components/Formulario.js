import React from 'react';
import axios from 'axios';
import { Button, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const estilos = makeStyles({
  preg: {
    justifyContent: 'center',
    display: 'flex'
  }
});

const Formulario = ({
  guardarRespuesta,
  respuesta,
  pregunta,
  contador,
  guardarContador,
  idUsuario
}) => {
  const cambio = (e) => {
    guardarRespuesta(e.target.value);
  };

  const enviar = async (e) => {
    e.preventDefault();
    guardarContador(contador + 1);

    const response = await axios({
      method: 'post',
      url: 'https://declarap.herokuapp.com/agregarRespuesta',
      data: {
        pregunta: pregunta,
        respuesta: respuesta,
        id: idUsuario
      }
    });

    console.log(response);
  };

  const clases = estilos();

  return (
    <form onSubmit={enviar} className='formulario'>
      <Grid container spacing={4} justify='center'>
        <Grid item sm={12}>
          <Grid item sm={12}>
            <label className={clases.preg}>{pregunta} </label>
          </Grid>
          <Grid item sm={12}>
            <TextField
              name='pregunta'
              type='text'
              onChange={cambio}
              className={clases.preg}
            />
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Button color='primary' variant='contained' fullWidth>
            Siguiente pregunta!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formulario;
