import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

import { URL } from '../constantes/constantes';

const Login = () => {
  const [status, guardarStatus] = useState(0);
  const [token, guardarToken] = useState('');
  const [usuario, guardarUsuario] = useState({});
  const [error, guardarError] = useState(false);

  const datosformulario = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (status === 202 && localStorage.getItem('token')) {
      guardarError(false);
      console.log('sin error, aceptado, estatus 202');
      Router.push('/plataforma');
    } else if (status === 400 && !token) {
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
      url: `${URL}/plataforma/login`,
      data: {
        email: usuario.email,
        password: usuario.password
      }
    });
    if (!respuesta || !respuesta.data.token) {
      guardarError(true);
      guardarStatus(respuesta.status);
    } else {
      localStorage.setItem('token', `Bearer ${respuesta.data.token}`);
      const token = localStorage.getItem('token');
      guardarStatus(respuesta.status);
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
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
      <input type='submit' value='Iniciar Sesión' />
      {error ? <p>Hubo un error</p> : null}
    </form>
  );
};

export default Login;
