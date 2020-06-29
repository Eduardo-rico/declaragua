import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Item from './Item';

const Lista = styled.ul`
  border: 2px solid blue;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListaClientes = ({ clientes }) => {
  return (
    <Lista>
      {clientes.map((cli) => (
        <Item cli={cli} />
      ))}
    </Lista>
  );
};

export default ListaClientes;
