import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { URL } from '../constantes/constantes';
import PlataformaLayout from '../components/PlataformaLayout';

import Boton from '../components/Boton';
import ListaClientes from '../components/ListaClientes';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
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

  const CerrarSesion = () => (
    <Boton
      onClick={() => {
        localStorage.removeItem('token');
        Router.push('/');
      }}
    >
      Cerrar sesión
    </Boton>
  );

  const NuevoCliente = () => (
    <Boton
      onClick={() => {
        Router.push('/plataforma/cliente/crear-cliente');
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
      <Wrapper>
        {clientes.length === 0 ? (
          <p>No tienes ningun usuario...</p>
        ) : (
          <ListaClientes clientes={clientes} />
        )}
      </Wrapper>
    </PlataformaLayout>
  );
};

export default Plataforma;
