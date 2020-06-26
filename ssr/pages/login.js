import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

import { URL } from '../constantes/constantes';
import Layout from '../components/Layout';

import styled from '@emotion/styled';
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Boton = styled.input`
  height: 2.2rem;
  background-color: #ee239de4;
  border: none;
  border-radius: 50px;
  max-width: calc(100% - 1rem);
  transition: 0.3s ease;
  &:hover {
    background-color: #ff239d99;
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 20%;
  input:last-of-type {
    margin: 0.6rem 0 0 0;
    border: none;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #aaa;
  max-width: 100%;
  margin-bottom: 0.5rem;
  height: 1.4rem;
  text-align: center;
  background-color: none;
  &::placeholder {
    color: blue;
    opacity: 0.8;
  }
`;

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
    <Layout>
      <Contenedor>
        <Form onSubmit={enviarFormulario}>
          <Input
            type='email'
            name='email'
            placeholder='contacto@correo.com'
            onChange={datosformulario}
            required
          />
          <Input
            type='password'
            name='password'
            placeholder='*******'
            onChange={datosformulario}
            required
          />
          <Boton type='submit' value='Iniciar Sesión' />
          {error ? <p>Hubo un error</p> : null}
        </Form>
      </Contenedor>
    </Layout>
  );
};

export default Login;
