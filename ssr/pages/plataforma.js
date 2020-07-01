import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { URL } from '../constantes/constantes';
import PlataformaLayout from '../components/PlataformaLayout';

import Boton from '../components/Boton';
import ListaClientes from '../components/ListaClientes';

import styled from '@emotion/styled';
import BotonCrearCliente from '../components/BotonCrearCliente';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin-top: 20px;
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

  return (
    <PlataformaLayout>
      <BotonCrearCliente />
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
