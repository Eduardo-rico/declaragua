import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const FormSignIn = () => {
	const history = useHistory();
	const [usuario, guardarUsuario] = useState({});

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			history.push('/plataforma');
		}
	}, []);

	const entrar = async (e) => {
		e.preventDefault();
		try {
			const respuesta = await Axios.post(
				'https://api.ricosotomayor.com/plataforma/login',
				{
					'email': usuario.email,
					'password': usuario.password,
				}
			);
			localStorage.setItem('token', respuesta.data.token);
			history.push('/plataforma');
		} catch (error) {
			console.log(error);
		}
	};

	const changeHandler = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Form onSubmit={entrar}>
			<label>
				Correo:
				<input type="text" name="email" onChange={changeHandler} />
			</label>
			<label>
				Contraseña:
				<input type="password" name="password" onChange={changeHandler} />
			</label>
			<input type="submit" value="Entrar" />
		</Form>
	);
};

export default FormSignIn;
