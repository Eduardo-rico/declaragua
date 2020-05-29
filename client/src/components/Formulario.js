import React, { useRef } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const estilos = makeStyles({
  preg: {
    justifyContent: 'center',
    display: 'flex',
    padding: '1.5rem'
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
    console.log(respuesta);
  };

  const enviar = async (e) => {
    e.preventDefault();
    guardarContador(contador + 1);

    const response = await axios({
      method: 'post',
      url: 'https://declarap.herokuapp.com/agregarRespuesta',
      data: {
        pregunta: pregunta.preguntaCuestionario,
        respuesta: respuesta,
        id: idUsuario
      }
    });

    console.log(response);
  };

  const clases = estilos();
  const selector = useRef('selector');
  return (
    <form onSubmit={enviar} className='formulario'>
      <Grid container spacing={4} justify='center'>
        <Grid item sm={12}>
          <Grid item sm={12}>
            <label className={clases.preg}>
              {pregunta.preguntaCuestionario}{' '}
            </label>
          </Grid>
          <Grid item sm={12}>
            <TextField
              id='selector'
              name='pregunta'
              type='text'
              value={respuesta}
              onChange={cambio}
              className={clases.preg}
              select
            >
              {pregunta.respuestaCuestionario.map((respCuestionario, idx) => (
                <MenuItem ref={selector} key={idx} value={respCuestionario}>
                  {respCuestionario}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item sm={12} className={clases.preg}>
          <Button color='primary' variant='contained' type='submit' fullWidth>
            Siguiente pregunta!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formulario;
