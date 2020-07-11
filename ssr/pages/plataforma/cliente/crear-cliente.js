import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Boton from '../../../components/Boton';
import Link from 'next/link';

import { URL } from '../../../constantes/constantes';
import Layout from '../../../components/Layout';

import styled from '@emotion/styled';
import PlataformaLayout from '../../../components/PlataformaLayout';

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const BotonIn = styled.input`
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
    margin: 1rem 0 0 0;
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
      url: `${URL}/plataforma/usuarios/nuevo`,
      headers: {
        Authorization: tokenLocal
      },
      data: clientenuevo
    });
    console.log(res);
    if (res.status === 200) {
      Router.push('/plataforma');
    } else if (res.status === 401) {
      console.log('error');
      console.log(res.status);
      Router.push('/login');
    }
    guardarRespuesta(res);
  };

  return (
    <PlataformaLayout>
      <Contenedor>
        <Form onSubmit={enviarCliente}>
          <Input
            type='text'
            name='nombre'
            placeholder='nombre'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='rfc'
            placeholder='rfc'
            onChange={guardarCliente}
          />
          <Input type='date' name='fechaMaxima' onChange={guardarCliente} />
          <Input
            type='text'
            name='nombreConagua'
            placeholder='Nombre de conagua:'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='passwordConagua'
            placeholder='Contraseña de conagua'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='numTitulo'
            placeholder='Numero de titulo'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='numSolicitud'
            placeholder='Numero de solicitud o expediente'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='ciudad'
            placeholder='Ciudad'
            onChange={guardarCliente}
          />
          <Input
            type='text'
            name='estatus'
            placeholder='Estatus'
            onChange={guardarCliente}
          />
          <BotonIn type='submit' value='Crear' />
        </Form>
      </Contenedor>
      <Boton
        onClick={() => {
          Router.push('/plataforma');
        }}
      >
        Cancelar
      </Boton>
    </PlataformaLayout>
  );
};

export default CrearCliente;
