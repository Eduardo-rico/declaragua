import React from 'react';
import Router from 'next/router';
import Boton from './Boton';
const CerrarSesion = () => {
  return (
    <Boton
      style={{ marginRight: '20px' }}
      onClick={() => {
        localStorage.removeItem('token');
        Router.push('/');
      }}
    >
      Cerrar sesión
    </Boton>
  );
};

export default CerrarSesion;
