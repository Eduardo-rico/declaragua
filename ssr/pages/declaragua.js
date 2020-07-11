import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Router from 'next/router';

const Entrar = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid blue;
  border-radius: 5px;
  padding: 10px;

  a  {
    margin-right: 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }
  a:last-of-type {
    margin-right: 0;
  }
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;

const Declaragua = () => {
  const tokenLocal = localStorage.getItem('token');
  if (tokenLocal) {
    Router.push('/plataforma');
  }
  return (
    <Layout>
      <Contenedor>
        <Entrar>
          <Link href='/signup'>
            <a>Crear cuenta</a>
          </Link>
          <Link href='/login'>
            <a>Iniciar sesión</a>
          </Link>
        </Entrar>
      </Contenedor>
    </Layout>
  );
};

export default Declaragua;
