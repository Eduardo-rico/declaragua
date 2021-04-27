import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Router from 'next/router';

import Boton from '../../../../components/Boton';
import PlataformaLayout from '../../../../components/PlataformaLayout';
import { URL } from '../../../../constantes/constantes';

const Contenedor = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
`;

const BotonIn = styled.input`
	height: 2.2rem;
	background-color: #ee239de4;
	border: none;
	border-radius: 50px;
	max-width: calc(100% - 1rem);
	transition: 0.3s ease;
	&:hover {
		background-color: #ff239d99;
		opacity: 0.8;
		cursor: pointer;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	width: 40vw;
	input:last-of-type {
		margin: 1rem 0 0 0;
		border: none;
	}
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid #aaa;
	max-width: 100%;
	margin-bottom: 0.5rem;
	height: 1.4rem;
	text-align: center;
	background-color: none;
	&::placeholder {
		color: blue;
		opacity: 0.8;
	}
`;

const CrearAgua = () => {
	const [aguanueva, guardarAguaNueva] = useState({});
	const [checked, guardarChecked] = useState(false);

	const guardarAgua = (e) => {
		guardarChecked(!checked);
		guardarAguaNueva({
			...aguanueva,
			[e.target.name]: e.target.value,
		});
	};

	const enviarCliente = async (e) => {
		e.preventDefault();
		const tokenLocal = localStorage.getItem('token');
		if (!tokenLocal) {
			Router.push('/login');
		}
		try {
			const res = await axios({
				method: 'POST',
				url: `${URL}/plataforma/agua/crear`,
				headers: {
					Authorization: tokenLocal,
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				data: aguanueva,
			});
			if (res.status === 200) {
				Router.push('/plataforma/usuario/gestion-agua/agua');
			}
		} catch (error) {
			console.log(error);
			Router.push('/login');
			localStorage.removeItem('token');
		}
	};

	return (
		<PlataformaLayout>
			<Contenedor>
				<Form onSubmit={enviarCliente}>
					<label>Volumen m3</label>
					<Input
						type="text"
						name="volumen"
						placeholder="10000"
						onChange={guardarAgua}
					/>
					<label>Precio</label>
					<Input
						type="text"
						name="precio"
						placeholder="$10.50"
						onChange={guardarAgua}
					/>
					<label>Nombre del vendedor</label>
					<Input
						type="text"
						name="vendedor"
						placeholder="Pedro Páramo"
						onChange={guardarAgua}
					/>
					<label>Marcar casilla si vende</label>
					<Input
						type="checkbox"
						name="vendeOcompra"
						onChange={guardarAgua}
						defaultValue={checked}
					/>

					<select
						onChange={guardarAgua}
						defaultValue="No Especificado"
						name="acuifero"
					>
						<option value="No Especificado">No Especificado</option>
						<option value="Ciénega Prieta - Moroleón">
							Ciénega Prieta - Moroleón
						</option>
						<option value="Cuenca Alta del Río Laja">
							Cuenca Alta del Río Laja
						</option>
						<option value="Dr. Mora - San José Iturbide">
							Dr. Mora - San José Iturbide
						</option>
						<option value="Irapuato - Valle">Irapuato - Valle</option>
						<option value="Jaral de Berrios - Villa de Reyes">
							Jaral de Berrios - Villa de Reyes
						</option>
						<option value="La Muralla">La Muralla</option>
						<option value="Lago de Cuitzeo">Lago de Cuitzeo</option>
						<option value="Laguna Seca">Laguna Seca</option>
						<option value="Ocampo">Ocampo</option>
						<option value="Pénjamo - Abasolo">Pénjamo - Abasolo</option>
						<option value="Río Turbio">Río Turbio</option>
						<option value="Salvatierra - Acambaro">
							Salvatierra - Acambaro
						</option>
						<option value="San Miguel de Allende">San Miguel de Allende</option>
						<option value="Santa María">Santa María</option>
						<option value="Silao - Romita">Silao - Romita</option>
						<option value="Valle de Acámbaro">Valle de Acámbaro</option>
						<option value="Valle de Celaya">Valle de Celaya</option>
						<option value="Valle de la Cuevita">Valle de la Cuevita</option>
						<option value="Valle de Leon">Valle de Leon</option>
						<option value="Xichú - Atarjea">Xichú - Atarjea</option>
					</select>
					<BotonIn type="submit" value="Crear" />
				</Form>
			</Contenedor>
			<Boton
				onClick={() => {
					Router.push('/plataforma');
				}}
			>
				Cancelar
			</Boton>
		</PlataformaLayout>
	);
};

export default CrearAgua;
