import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { URL } from '../constantes/constantes';

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
    <div>
      <h1>
        <Link href='/plataforma'>
          <a>Plataforma</a>
        </Link>
      </h1>
      <Link href='/crear-cliente'>
        <a>Crear Cliente</a>
      </Link>
      <ul>
        {clientes.map((cli) => (
          <li key={cli._id}>
            <Link href='plataforma/[clienteId]' as={`plataforma/${cli._id}`}>
              <a>{cli.nombre}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          Router.push('/');
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Plataforma;
