import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Router from 'next/router';
import Boton from '../components/Boton';

const Entrar = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid blue;
  border-radius: 5px;
  padding: 10px;

  button  {
    padding: 10px 10px 10px 10px;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  button:last-of-type {
    margin-right: 0;
  }
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;

const Declaragua = () => {
  return (
    <Layout>
      <Contenedor>
        <Entrar>
          <Boton onClick={() => Router.push('/signup')}>Crear cuenta</Boton>
          <Boton onClick={() => Router.push('/login')}>Entrar</Boton>
        </Entrar>
      </Contenedor>
    </Layout>
  );
};

export default Declaragua;
