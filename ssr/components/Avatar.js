import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Router from 'next/router';

import Boton from './Boton';

const ImagenAvatar = styled.div`
  width: 90px;
  height: 90px;
  background-color: red;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 100px;
`;

const Informacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Botones = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 10px 0;
  }
`;

const Avatar = () => {
  return (
    <div>
      <ImagenAvatar />
      <Informacion>
        <p>Nombre del Usuario</p>
        <Botones>
          <Boton
            onClick={() => Router.push('/plataforma/usuario/gestion-agua/agua')}
          >
            Ir a Compra-Venta de agua
          </Boton>
          <Boton
            onClick={() => Router.push('/plataforma/cliente/crear-cliente')}
          >
            Crear Nuevo Cliente
          </Boton>
          <Boton onClick={() => Router.push('/plataforma')}>
            Ver mis clientes
          </Boton>
        </Botones>
      </Informacion>
    </div>
  );
};

export default Avatar;
