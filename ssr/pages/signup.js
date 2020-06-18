import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

import { URL } from '../constantes/constantes';

const Signup = () => {
  const [status, guardarStatus] = useState(0);
  const [usuario, guardarUsuario] = useState({});
  const [error, guardarError] = useState(false);

  const datosformulario = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (status === 201) {
      guardarError(false);
      console.log('sin error, estatus 201');
      Router.push('/login');
    } else if (status === 400) {
      guardarError(true);
      console.log('Con error, estatus 400');
    } else if (status === 0) {
      guardarError(false);
    } else {
      guardarError(true);
      console.log('Con error, estatus 500', status);
    }
  }, [status]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const respuesta = await axios({
      method: 'POST',
      url: `${URL}/plataforma/nuevoUsuario`,
      data: {
        email: usuario.email,
        password: usuario.password,
        nombre: usuario.nombre
      }
    });
    guardarStatus(respuesta.status);
    console.log(respuesta);
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input
        type='text'
        name='nombre'
        placeholder='Escribe tu nombre'
        onChange={datosformulario}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='contacto@correo.com'
        onChange={datosformulario}
        required
      />
      <input
        type='password'
        name='password'
        placeholder='*******'
        onChange={datosformulario}
        required
      />
      <input type='submit' value='Crear cuenta' />
    </form>
  );
};

export default Signup;
