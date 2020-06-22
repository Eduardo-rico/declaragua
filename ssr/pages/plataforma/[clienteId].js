import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import moment from 'moment';

import { URL } from '../../constantes/constantes';
import Layout from '../../components/Layout';

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
        guardarCliente(clientes.data.Mensaje);
        console.log(router.query);
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
    <Layout>
      <div>
        <h2>
          <Link href='/plataforma'>
            <a>Plataforma</a>
          </Link>
        </h2>
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

        <Link href='/plataforma'>
          <a>Regresar a tus usuarios</a>
        </Link>
        <button onClick={eliminarCliente}>Eliminar cliente</button>
        {/* <Link
        href='/plataforma/editar/[editarId]'
        as={`/plataforma/editar/${cliente._id}`}
        
      >
        <a>Editar cliente</a>
      </Link> */}
        <p>Editar Cliente</p>
      </div>
    </Layout>
  );
};

export default Cliente;
