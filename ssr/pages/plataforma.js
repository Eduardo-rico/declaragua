import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { URL } from '../constantes/constantes';
import Layout from '../components/Layout';

import styled from '@emotion/styled';
import PlataformaLayout from '../components/PlataformaLayout';

const Boton = styled.button`
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

const Plataforma = () => {
  const [clientes, guardarClientes] = useState([]);
  const [token, guardarToken] = useState('');
  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      guardarToken(tokenLocal);
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        const clientes = await axios({
          method: 'GET',
          url: `${URL}/plataforma/usuarios`,
          headers: {
            Authorization: tokenLocal
          }
        });
        guardarClientes(clientes.data.Mensaje);
      }
    };
    consultar();
  }, []);

  if (!token) {
    return null;
  }

  const CerrarSesion = () => {
    return (
      <Boton
        onClick={() => {
          localStorage.removeItem('token');
          Router.push('/');
        }}
      >
        Cerrar sesión
      </Boton>
    );
  };

  const NuevoCliente = () => (
    <Boton
      onClick={() => {
        Router.push('/crear-cliente');
      }}
    >
      Crear cliente nuevo
    </Boton>
  );

  return (
    <PlataformaLayout CerrarSesion={CerrarSesion} NuevoCliente={NuevoCliente}>
      <h1>
        <Link href='/plataforma'>
          <a>Plataforma</a>
        </Link>
      </h1>

      <ul>
        {clientes.map((cli) => (
          <li key={cli._id}>
            <Link href='plataforma/[clienteId]' as={`plataforma/${cli._id}`}>
              <a>{cli.nombre}</a>
            </Link>
          </li>
        ))}
      </ul>
    </PlataformaLayout>
  );
};

export default Plataforma;
