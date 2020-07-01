import Boton from './Boton';
import React from 'react';
import Router from 'next/router';

const BotonCrearCliente = () => {
  return (
    <Boton
      onClick={() => {
        Router.push('cliente/crear-cliente');
      }}
    >
      Crear cliente nuevo
    </Boton>
  );
};

export default BotonCrearCliente;
