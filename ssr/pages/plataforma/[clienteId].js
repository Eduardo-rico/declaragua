import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import moment from 'moment';

const Cliente = () => {
  const router = useRouter();
  const { clienteId } = router.query;

  const [cliente, guardarCliente] = useState({});
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
          url: `http://localhost:5256/plataforma/usuarios/${clienteId}`,
          headers: {
            Authorization: tokenLocal
          }
        });
        guardarCliente(clientes.data.Mensaje);
        console.log('volviendo a consultar');
      }
    };
    consultar();
  }, []);

  const eliminarCliente = async () => {
    console.log('hola');
    const clienteEliminado = await axios({
      method: 'DELETE',
      url: `http://localhost:5256/plataforma/usuarios/${clienteId}`,
      headers: {
        Authorization: token
      }
    });
    Router.push('/plataforma');
  };

  return (
    <div>
      {/* <p>{cliente._id} </p>
      <p>{cliente.creadoPor} </p> */}
      <p>Nombre: {cliente.nombre} </p>
      <p>RFC: {cliente.rfc} </p>
      <p>Nombre conagua: CONAGUA{cliente.nombreConagua} </p>
      <p>Contraseña Conagua: {cliente.passwordConagua} </p>
      <p>Número de Titulo: {cliente.numTitulo} </p>
      <p>Número de solicitud o expediente: {cliente.numSolicitud} </p>
      <p>Ciudad: {cliente.ciudad} </p>
      <p>Fecha máxima: {moment(cliente.fechaMaxima).format('L')} </p>
      <p>
        En {moment(cliente.fechaMaxima).locale('es').fromNow()} se vence plazo
        máximo
      </p>
      <Link href='/plataforma'>
        <a>Regresar a tus usuarios</a>
      </Link>
      <button onClick={eliminarCliente}>Eliminar cliente</button>
      <Link
        href='/plataforma/editar/[editarId]'
        as={`/plataforma/editar/${cliente._id}`}
      >
        <a>Editar cliente</a>
      </Link>
    </div>
  );
};

export default Cliente;
