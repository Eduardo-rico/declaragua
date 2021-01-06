import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';


import { URL } from '../constantes/constantes';

const Div = styled.div`
  display: block;
  justify-content: center;
  padding: 10px;

`;

const ResumenAgua = ({ dato }) => {
  const eliminar = async (id) => {
    const tokenLocal = localStorage.getItem('token');
    if (!tokenLocal) {
      Router.push('/login');
    } else {
      console.log(id)
      const respuesta = await axios({
        method: 'DELETE',
        url: `${URL}/plataforma/agua/borrar/${id}/`,
        headers: {
          Authorization: tokenLocal
        }
      });
      console.log(respuesta)
      Router.push('/plataforma/usuario/gestion-agua/agua');
    }
  };

  return (
    <Div>
      <p>Nombre del que compra o vende: {dato.vendedor}</p>
      <p>Nombre del acuífero: {dato.acuifero}</p>
      <p>Precio: ${dato.precio}</p>
      <p>Volúmen: {dato.precio} metros cúbicos</p>
      <p>Acción: {dato.vendeOcompra ? "vende" : "compra"}</p>
      <div style={{
        display: 'flex',
        justifyContent: "center"
      }}>
        <button onClick={() => { eliminar(dato._id) }} style={{
          display: 'block',
          borderWidth: '1px',
          borderRadius: '10%',
          height: '30px',
          backgroundColor: '#e64942',
          cursor: 'pointer',
          backgroundColor: '#e64942',
          borderColor: '#b4d0e0',
          padding: "5px",
        }}>Eliminar</button>
        <button onClick={() => {
          Router.push(
            '/plataforma/usuario/gestion-agua/editar/[clienteId]',
            `/plataforma/usuario/gestion-agua/editar/${dato._id}`
          );
        }} style={{
          marginLeft: '10px',
          display: 'block',
          borderWidth: '1px',
          borderRadius: '10%',
          height: '30px',
          backgroundColor: '#e64942',
          cursor: 'pointer',
          backgroundColor: 'yellow',
          borderColor: '#b4d0e0',
          padding: "5px",
        }}>Editar</button>
      </div>
    </Div>
  );
};

export default ResumenAgua;
