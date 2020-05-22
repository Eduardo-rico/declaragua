import React from 'react';
import axios from 'axios';

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
    <form onSubmit={enviar}>
      <label>{pregunta} </label>
      <input name='pregunta 1' type='text' onChange={cambio} />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default Formulario;
