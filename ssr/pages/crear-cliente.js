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
        <input type='text' name='nombre' onChange={guardarCliente} />
        <input type='submit' value='Crear' />
      </form>
    </div>
  );
};

export default CrearCliente;
