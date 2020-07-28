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

const InputBusqueda = styled.input`
  margin-top: 2rem;
  min-width: 400px;
  min-height: 40px;
  border: none;
  border-bottom: 2px solid black;
  :hover {
    border-bottom: 2px solid blue;
  }
`;

const Plataforma = () => {
  const [clientes, guardarClientes] = useState([]);
  const [clientesbusqueda, guardarClientesBusqueda] = useState([]);
  const [busqueda, guardarBusqueda] = useState('');
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
        if (clientes.status === 401) {
          Router.push('/login');
        }
      }
    };
    consultar();
  }, []);

  // useEffect(() => {
  //   const nombresFiltrados = clientes.filter((obj) => {
  //     return obj.nombre.toLowerCase().includes(busqueda.toLowerCase());
  //   });
  //   guardarClientesBusqueda(nombresFiltrados);
  // }, [busqueda, clientes]);

  if (!token) {
    return null;
  }

  const buscar = (e) => {
    guardarBusqueda(e.target.value);
    const nombresFiltrados = clientes.filter((obj) => {
      return obj.nombre.toLowerCase().includes(busqueda.toLowerCase());
    });
    guardarClientesBusqueda(nombresFiltrados);
  };

  // console.log(clientesbusqueda);
  return (
    <PlataformaLayout>
      <BotonCrearCliente />
      <InputBusqueda
        onChange={buscar}
        type='text'
        placeholder='Buscar usuario'
      />
      {!busqueda ? (
        <Wrapper>
          {clientes.length === 0 ? (
            <p>No tienes ningun usuario...</p>
          ) : (
            <ListaClientes clientes={clientes} />
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          {clientesbusqueda.length === 0 ? (
            <p>No tienes ningun usuario...</p>
          ) : (
            <ListaClientes clientes={clientesbusqueda} />
          )}
        </Wrapper>
      )}
    </PlataformaLayout>
  );
};

export default Plataforma;
