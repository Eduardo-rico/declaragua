import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

const CrearCliente = () => {
  const [clientenuevo, guardarClienteNuevo] = useState({});
  const [respuesta, guardarRespuesta] = useState({});

  const guardarCliente = (e) => {
    guardarClienteNuevo({
      ...clientenuevo,
      [e.target.name]: e.target.value
    });
  };

  const enviarCliente = async (e) => {
    e.preventDefault();
    const tokenLocal = localStorage.getItem('token');
    if (!tokenLocal) {
      Router.push('/login');
    }
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:5256/plataforma/usuarios/nuevo',
      headers: {
        Authorization: tokenLocal
      },
      data: clientenuevo
    });
    console.log(res);
    if (res.status === 200) {
      Router.push('/plataforma');
    }
    guardarRespuesta(res);
  };

  return (
    <div>
      <form onSubmit={enviarCliente}>
        <input
          type='text'
          name='nombre'
          placeholder='nombre'
          onChange={guardarCliente}
        />
        <input
          type='text'
          name='rfc'
          placeholder='rfc'
          onChange={guardarCliente}
        />
        <input type='date' name='fechaMaxima' onChange={guardarCliente} />
        <input
          type='text'
          name='nombreConagua'
          placeholder='Nombre de conagua:'
          onChange={guardarCliente}
        />
        <input
          type='text'
          name='passwordConagua'
          placeholder='Contraseña de conagua'
          onChange={guardarCliente}
        />
        <input
          type='text'
          name='numTitulo'
          placeholder='Numero de titulo'
          onChange={guardarCliente}
        />
        <input
          type='text'
          name='numSolicitud'
          placeholder='Numero de solicitud o expediente'
          onChange={guardarCliente}
        />
        <input
          type='text'
          name='ciudad'
          placeholder='Ciudad'
          onChange={guardarCliente}
        />
        <input type='submit' value='Crear' />
      </form>
    </div>
  );
};

export default CrearCliente;
