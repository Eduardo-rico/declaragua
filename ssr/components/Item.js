import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Boton from './Boton';

const ItemList = styled.li`
  list-style: none;
  position: relative;
  margin: 2px;
  padding: 2px;
  display: inline-block;
  min-width: 376px;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: #eee;
  }
`;

const ContenidoItem = styled.div`
  border: solid red 2px;
  background-color: white;
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
            <div>
              <p>Hola 1</p>
              <p>Hola 1</p>
              <p>Hola 1</p>
            </div>
            <div styles={{ display: 'flex', alignItems: 'center' }}>
              <Link
                href='plataforma/cliente/[clienteId]'
                as={`plataforma/cliente/${cli._id}`}
              >
                <Boton>Ir al cliente</Boton>
              </Link>
            </div>
          </ContenidoItem>
        ) : null}
      </div>
      {children}
    </ItemList>
  );
};

export default Item;
