import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Boton from './Boton';
import Router from 'next/router';

const ItemList = styled.li`
  border-radius: 5px;
  list-style: none;
  position: relative;
  margin: 3px;
  padding: 6px;
  display: inline-block;
  min-width: 315px;
  background-color: #d3e5ed;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: #ccedfc;
  }
`;

const ContenidoItem = styled.div`
  background-color: white;
`;

const DentroDelItem = styled.div`
  display: flex;
  padding: 7px;
  flex-direction: column;
`;

const Item = ({ cli, children }) => {
  const [clicked, guardarClicked] = useState(false);

  return (
    <ItemList
      key={cli._id}
      onClick={() => {
        guardarClicked(!clicked);
      }}
    >
      <a>{cli.nombre}</a>
      <div style={{ maxHeight: 'auto' }}>
        {clicked ? (
          <ContenidoItem>
            <DentroDelItem>
              <p>Nombre de Conagua: CONAGUA{cli.nombreConagua}</p>
              <p>Contraseña de Conagua: {cli.passwordConagua}</p>
              <Boton
                onClick={() => {
                  Router.push(
                    '/plataforma/cliente/[clienteId]',
                    `/plataforma/cliente/${cli._id}`
                  );
                }}
              >
                Ir al cliente
              </Boton>
            </DentroDelItem>
          </ContenidoItem>
        ) : null}
      </div>
      {children}
    </ItemList>
  );
};

export default Item;
