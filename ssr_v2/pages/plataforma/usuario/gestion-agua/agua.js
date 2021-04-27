import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

import PlataformaLayout from '../../../../components/PlataformaLayout';
import ResumenAgua from '../../../../components/ResumenAgua';
import Boton from '../../../../components/Boton';
import { URL } from '../../../../constantes/constantes';

const Agua = () => {
	const [aguas, guardarAguas] = useState([]);
	const [aquifero, guardarAcuifero] = useState('todo');
	const [vende, guardarVendeOCompra] = useState('Todos');

	useEffect(() => {
		const consultar = async () => {
			const tokenLocal = localStorage.getItem('token');
			if (!tokenLocal) {
				Router.push('/login');
			} else {
				const aguas = await axios({
					method: 'GET',
					url: `${URL}/plataforma/agua`,
					headers: {
						Authorization: tokenLocal,
						'Access-Control-Allow-Origin': '*',
					},
				});
				guardarAguas(aguas.data.Mensaje);
				if (aguas.status === 401) {
					Router.push('/login');
				}
			}
		};
		consultar();
	}, []);

	const cambiarAquifero = (e) => {
		guardarAcuifero(e.target.value);
	};

	const cambiarVenta = (e) => {
		guardarVendeOCompra(e.target.value);
	};

	return (
		<PlataformaLayout>
			<div>
				<Boton
					onClick={() => {
						Router.push('/plataforma/usuario/gestion-agua/crear-agua');
					}}
				>
					Crear nuevo registro de venta de agua
				</Boton>
				<div>
					<h3>Selecciona el aquífero</h3>
					<select
						onChange={cambiarAquifero}
						defaultValue="todo"
						name="acuifero"
					>
						<option value="todo">Todo</option>
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

					<select onChange={cambiarVenta} defaultValue="Todos" name="venta">
						<option value="Todos">Todos</option>
						<option value="vende">Vende</option>
						<option value="compra">Compra</option>
					</select>
				</div>
				{aguas.map((dato) => {
					if (aquifero == 'todo' && vende == 'Todos') {
						return <ResumenAgua dato={dato} key={dato._id} />;
					} else if (aquifero != 'todo' && vende == 'Todos') {
						if (aquifero == dato.acuifero) {
							return <ResumenAgua dato={dato} key={dato._id} />;
						}
					} else if (vende == 'compra' && dato.vendeOcompra == false) {
						if (aquifero == dato.acuifero) {
							return <ResumenAgua dato={dato} key={dato._id} />;
						}
					} else if (vende == 'vende' && dato.vendeOcompra == true) {
						if (aquifero == dato.acuifero) {
							return <ResumenAgua dato={dato} key={dato._id} />;
						}
					}
				})}
			</div>
		</PlataformaLayout>
	);
};

export default Agua;
