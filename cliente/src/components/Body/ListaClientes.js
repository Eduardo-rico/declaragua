import React, { useState } from 'react';

import styled from 'styled-components';
import Item from './Item';

const Lista = styled.ul`
	padding: 10px;
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
				<li>{cli}</li>
			))}
		</Lista>
	);
};

export default ListaClientes;
