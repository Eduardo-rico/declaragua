import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import styled from '@emotion/styled';

import { URL } from '../../../../../constantes/constantes';

import PlataformaLayout from '../../../../../components/PlataformaLayout';
import BotonCancelar from '../../../../../components/BotonCancelar';
import BotonAceptar from '../../../../../components/BotonAceptar';

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 20%;
  input:last-of-type {
    margin: 0 0 3rem 0;
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

const Botones = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const EditarAgua = () => {
  const router = useRouter();
  const { aguaId } = router.query;

  const [cliente, guardarCliente] = useState({});
  const [respuesta, guardarRespuesta] = useState({});

  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      //console.log(aguaId)
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        const res = await axios({
          method: 'GET',
          url: `${URL}/plataforma/agua/${aguaId}`,
          headers: {
            authorization: tokenLocal
          }
        });
        guardarCliente(res.data.Mensaje);
        //console.log(res);
        // console.log(router.query);
        //console.log(cliente);
        //console.log('volviendo a consultar en aguaId');
      }
    };
    consultar();
  }, []);

  const guardarClienteForm = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
    //console.log(cliente);
  };

  const enviarCliente = async (e) => {
    e.preventDefault();
    const tokenLocal = localStorage.getItem('token');
    if (!tokenLocal) {
      Router.push('/login');
    }
    const res = await axios({
      method: 'PUT',
      url: `${URL}/plataforma/agua/cambiar/${aguaId}`,
      headers: {
        Authorization: tokenLocal
      },
      data: cliente
    });
    console.log("Actualización enviada");
    if (res.status === 200) {
      Router.push('/plataforma/usuario/gestion-agua/agua');
    } else if (res.status === 401) {
      Router.push('/login');
    }
    guardarRespuesta(res);
  };

  return (
    <PlataformaLayout>
      <h2>EDITAR {aguaId}</h2>
      <Contenedor>
        <Form onSubmit={enviarCliente}>
          <label>Nombre del que compra: </label>
          <Input
            type='text'
            name='vendedor'
            value={cliente.vendedor}
            onChange={guardarClienteForm}
          />

          <select onChange={guardarClienteForm} value={cliente.acuifero} name='acuifero'>
            <option value="No Especificado">No Especificado</option>
            <option value="Ciénega Prieta - Moroleón">Ciénega Prieta - Moroleón</option>
            <option value="Cuenca Alta del Río Laja">Cuenca Alta del Río Laja</option>
            <option value="Dr. Mora - San José Iturbide">Dr. Mora - San José Iturbide</option>
            <option value="Irapuato - Valle">Irapuato - Valle</option>
            <option value="Jaral de Berrios - Villa de Reyes">Jaral de Berrios - Villa de Reyes</option>
            <option value="La Muralla">La Muralla</option>
            <option value="Lago de Cuitzeo">Lago de Cuitzeo</option>
            <option value="Laguna Seca">Laguna Seca</option>
            <option value="Ocampo">Ocampo</option>
            <option value="Pénjamo - Abasolo">Pénjamo - Abasolo</option>
            <option value="Río Turbio">Río Turbio</option>
            <option value="Salvatierra - Acambaro">Salvatierra - Acambaro</option>
            <option value="San Miguel de Allende">San Miguel de Allende</option>
            <option value="Santa María">Santa María</option>
            <option value="Silao - Romita">Silao - Romita</option>
            <option value="Valle de Acámbaro">Valle de Acámbaro</option>
            <option value="Valle de Celaya">Valle de Celaya</option>
            <option value="Valle de la Cuevita">Valle de la Cuevita</option>
            <option value="Valle de Leon">Valle de Leon</option>
            <option value="Xichú - Atarjea">Xichú - Atarjea</option>
          </select>
          <label>Precio </label>
          <Input
            type='text'
            name='precio'
            value={cliente.precio}
            onChange={guardarClienteForm}
          />
          <label>Volumen </label>
          <Input
            type='text'
            name='volumen'
            value={cliente.volumen}
            onChange={guardarClienteForm}
          />
          <Botones>
            <BotonAceptar type='submit'>Guardar</BotonAceptar>
            <BotonCancelar
              onClick={(e) => {
                e.preventDefault();
                Router.push('/plataforma');
              }}
            >
              Cancelar
            </BotonCancelar>
          </Botones>
        </Form>
      </Contenedor>
      <Link href='/plataforma'>
        <a>Regresar a tus usuarios</a>
      </Link>
    </PlataformaLayout>
  );
};

export default EditarAgua;
