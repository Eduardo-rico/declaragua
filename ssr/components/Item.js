import React, { useState } from 'react';
import styled from '@emotion/styled';

const ItemList = styled.li`
  list-style: none;
  position: relative;
  margin: 2px;
  padding: 2px;
  display: inline-block;
  a {
    text-decoration: none;
    color: black;
  }
`;

const ContenidoItem = styled.div`
  border: solid red 2px;
  position: absolute;
  background-color: white;
`;

const Item = ({ cli, children }) => {
  const [clicked, guardarClicked] = useState(false);

  return (
    <ItemList key={cli._id}>
      <a
        onClick={() => {
          guardarClicked(!clicked);
        }}
      >
        {cli.nombre}
      </a>
      {clicked ? (
        <ContenidoItem>
          <p>Hola 1</p>
          <p>Hola 1</p>
          <p>Hola 1</p>
        </ContenidoItem>
      ) : null}
      {children}
    </ItemList>
  );
};

export default Item;
