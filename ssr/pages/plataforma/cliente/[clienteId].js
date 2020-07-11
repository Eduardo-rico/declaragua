import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import moment from 'moment';

import { URL } from '../../../constantes/constantes';
import Layout from '../../../components/Layout';

import styled from '@emotion/styled';
import PlataformaLayout from '../../../components/PlataformaLayout';
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Botones = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  justify-content: space-between;
`;

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

const Cliente = () => {
  const router = useRouter();
  const { clienteId } = router.query;

  const [cliente, guardarCliente] = useState({});
  const [token, guardarToken] = useState('');
  const [cargando, guardarCargando] = useState('');

  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      guardarToken(tokenLocal);
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        const clientes = await axios({
          method: 'GET',
          url: `${URL}/plataforma/usuarios/${clienteId}`,
          headers: {
            Authorization: tokenLocal
          }
        });
        if (clientes.status === 401) {
          Router.push('/login');
        }
        guardarCliente(clientes.data.Mensaje);
        // console.log(router.query);
        console.log('volviendo a consultar');
        guardarCargando(clienteId);
      }
    };
    consultar();
  }, []);

  const eliminarCliente = async () => {
    const clienteEliminado = await axios({
      method: 'DELETE',
      url: `${URL}/plataforma/usuarios/${clienteId}`,
      headers: {
        Authorization: token
      }
    });
    Router.push('/plataforma');
  };

  return (
    <PlataformaLayout>
      <Contenedor>
        <div>
          {/* <p>{cliente._id} </p>
      <p>{cliente.creadoPor} </p> */}
          {!cargando ? <p>Hola</p> : null}
          <p>Nombre: {cliente.nombre} </p>
          <p>RFC: {cliente.rfc} </p>
          <p>Nombre conagua: CONAGUA{cliente.nombreConagua} </p>
          <p>Contraseña Conagua: {cliente.passwordConagua} </p>
          <p>Número de Titulo: {cliente.numTitulo} </p>
          <p>Número de solicitud o expediente: {cliente.numSolicitud} </p>
          <p>Ciudad: {cliente.ciudad} </p>
          {cliente.fechaMaxima ? (
            <>
              <p>Fecha máxima: {moment(cliente.fechaMaxima).format('L')} </p>
              <p>
                En {moment(cliente.fechaMaxima).locale('es').fromNow()} se vence
                plazo máximo
              </p>
            </>
          ) : null}
          <p>Estatus: {cliente.estatus}</p>

          <Botones>
            <Boton
              onClick={() =>
                Router.push(
                  `/plataforma/cliente/editar/[editarId]`,
                  `/plataforma/cliente/editar/${clienteId}`
                )
              }
            >
              Editar Cliente
            </Boton>

            <Boton onClick={eliminarCliente}>Eliminar cliente</Boton>
          </Botones>
        </div>
      </Contenedor>
      {/* <Link
        href='/plataforma/editar/[editarId]'
        as={`/plataforma/editar/${cliente._id}`}
        
      >
        <a>Editar cliente</a>
      </Link> */}

      <Link href='/plataforma'>
        <a>Regresar a tus usuarios</a>
      </Link>
    </PlataformaLayout>
  );
};

export default Cliente;
