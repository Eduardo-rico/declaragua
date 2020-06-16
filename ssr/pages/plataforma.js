import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

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
          url: 'http://localhost:5256/plataforma/usuarios',
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
      <h1>Plataforma</h1>
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
    </div>
  );
};

export default Plataforma;
