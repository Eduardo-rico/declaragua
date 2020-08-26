import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

import { URL } from '../constantes/constantes';
import Layout from '../components/Layout';

import Boton from '../components/Boton';

import styled from '@emotion/styled';
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
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
      console.error('Con error, estatus 400');
    } else if (status === 0) {
      guardarError(false);
    } else {
      guardarError(true);
      console.error('Con error, estatus 500', status);
    }
  }, [status]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    try {
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
      // console.log(respuesta);
    } catch (error) {
      guardarError(true);
      console.error('Con error, estatus 500', error);
    }
  };

  return (
    <Layout>
      <Contenedor>
        <Form onSubmit={enviarFormulario}>
          <Input
            type='text'
            name='nombre'
            placeholder='Escribe tu nombre'
            onChange={datosformulario}
            required
          />
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
          <Boton type='submit'>Crear Cuenta</Boton>
          {error ? (
            <p
              style={{
                color: 'white',
                marginTop: '15px',
                justifyContent: 'center',
                backgroundColor: 'red',
                textAlign: 'center',
                fontSize: '20px',
                padding: '20px'
              }}
            >
              Hubo un error, prueba con otro correo!
            </p>
          ) : null}
        </Form>
      </Contenedor>
    </Layout>
  );
};

export default Signup;
