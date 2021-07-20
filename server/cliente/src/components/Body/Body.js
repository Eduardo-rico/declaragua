import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Usuario from '../Usuario/Usuario';
const Cuerpo = styled.div`
	margin-top: 30px;
`;

const TarjetaUsuario = styled.div`
	padding: 10px;
`;

const InputBusqueda = styled.input`
	margin-top: 2rem;
	min-width: 315px;
	min-height: 41px;
	border: none;
	border-bottom: 2px solid black;
	:hover {
		border-bottom: 2px solid blue;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Body = () => {
	const [usuarios, guardarUsuarios] = useState([]);
	const [busqueda, guardarBusqueda] = useState([]);
	const [clientes, guardarClientesBusqueda] = useState([]);

	useEffect(async () => {
		const token = localStorage.getItem('token');
		try {
			const respuesta = await Axios.get(
				'https://api.ricosotomayor.com/plataforma/usuarios',
				{
					headers: {
						'Authorization': `Basic ${token}`,
					},
				}
			);
			guardarUsuarios(respuesta.data.Mensaje);
			guardarClientesBusqueda(respuesta.data.Mensaje);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const buscar = (e) => {
		guardarBusqueda(e.target.value);
		const nombresFiltrados = usuarios.filter((obj) => {
			const nombre = ` ${obj.nombre} `;
			if (typeof nombre == 'string') {
				return nombre
					.strip()
					.toLocaleLowerCase()
					.includes(busqueda.toLocaleLowerCase());
			}
		});
		guardarClientesBusqueda(nombresFiltrados);
	};

	return (
		<Wrapper>
			<div>
				<InputBusqueda
					onChange={buscar}
					type="text"
					placeholder="Buscar usuario"
				/>
			</div>
			<Cuerpo>
				{clientes.map((usuario) => {
					return (
						<TarjetaUsuario key={usuario._id}>
							<p>Nombre: {usuario.nombre}</p>
							<p>Usuario: CONAGUA{usuario.nombreConagua}</p>
							<p>Contraseña: {usuario.passwordConagua}</p>
						</TarjetaUsuario>
					);
				})}
			</Cuerpo>
		</Wrapper>
	);
};

export default Body;
