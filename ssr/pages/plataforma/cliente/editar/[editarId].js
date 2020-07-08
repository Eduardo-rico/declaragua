import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import styled from '@emotion/styled';

import { URL } from '../../../../constantes/constantes';

import PlataformaLayout from '../../../../components/PlataformaLayout';
import Boton from '../../../../components/Boton';
import BotonCancelar from '../../../../components/BotonCancelar';
import BotonAceptar from '../../../../components/BotonAceptar';

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

const Editar = () => {
  const router = useRouter();
  const { editarId } = router.query;

  const [cliente, guardarCliente] = useState({});
  const [respuesta, guardarRespuesta] = useState({});
  const [token, guardarToken] = useState('');

  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      guardarToken(tokenLocal);
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        const res = await axios({
          method: 'GET',
          url: `${URL}/plataforma/usuarios/${editarId}`,
          headers: {
            authorization: tokenLocal
          }
        });
        guardarCliente(res.data.Mensaje);
        console.log(res);
        // console.log(router.query);
        console.log(cliente);
        console.log('volviendo a consultar en editarId');
      }
    };
    consultar();
  }, []);

  const guardarClienteForm = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
    console.log(cliente);
  };

  const enviarCliente = async (e) => {
    e.preventDefault();
    const tokenLocal = localStorage.getItem('token');
    if (!tokenLocal) {
      Router.push('/login');
    }
    const res = await axios({
      method: 'PUT',
      url: `${URL}/plataforma/usuarios/${editarId}`,
      headers: {
        Authorization: tokenLocal
      },
      data: cliente
    });
    console.log(res);
    if (res.status === 200) {
      Router.push('/plataforma');
    }
    guardarRespuesta(res);
  };

  return (
    <PlataformaLayout>
      <h2>EDIRAR {editarId}</h2>
      <Contenedor>
        <Form onSubmit={enviarCliente}>
          <label>Nombre: </label>
          <Input
            type='text'
            name='nombre'
            value={cliente.nombre}
            onChange={guardarClienteForm}
          />
          <label>RFC: </label>
          <Input
            type='text'
            name='rfc'
            value={cliente.rfc}
            onChange={guardarClienteForm}
          />
          <label>Fecha de entrega: </label>
          <Input
            type='date'
            name='fechaMaxima'
            value={cliente.fechaMaxima}
            onChange={guardarClienteForm}
          />
          <label>Nombre de Conagua</label>
          <Input
            type='text'
            name='nombreConagua'
            value={cliente.nombreConagua}
            onChange={guardarClienteForm}
          />
          <label>Contraseña de Conagua</label>
          <Input
            type='text'
            name='passwordConagua'
            value={cliente.passwordConagua}
            onChange={guardarClienteForm}
          />
          <label>Numero de titulo:</label>
          <Input
            type='text'
            name='numTitulo'
            value={cliente.numTitulo}
            onChange={guardarClienteForm}
          />
          <label>Numero de solicitud:</label>
          <Input
            type='text'
            name='numSolicitud'
            value={cliente.numSolicitud}
            onChange={guardarClienteForm}
          />
          <label>Ciudad:</label>
          <Input
            type='text'
            name='ciudad'
            value={cliente.ciudad}
            onChange={guardarClienteForm}
          />
          <label>Estatus: </label>
          <Input
            type='text'
            name='estatus'
            value={cliente.estatus}
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

export default Editar;
