import React from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';

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
      url: 'http://localhost:5256/agregarRespuesta',
      data: {
        pregunta: pregunta,
        respuesta: respuesta,
        id: idUsuario
      }
    });

    console.log(response);
  };

  return (
    <form onSubmit={enviar} className='formulario'>
      <label>{pregunta} </label>
      <TextField name='pregunta' type='text' onChange={cambio} />
      <Button color='primary' variant='contained' fullWidth>
        Siguiente pregunta!
      </Button>
    </form>
  );
};

export default Formulario;
