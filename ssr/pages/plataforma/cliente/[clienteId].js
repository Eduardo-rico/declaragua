import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';
import moment from 'moment';
import swal from 'sweetalert';

import { URL } from '../../../constantes/constantes';
import Layout from '../../../components/Layout';

import styled from '@emotion/styled';
import PlataformaLayout from '../../../components/PlataformaLayout';
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Botones = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  justify-content: space-between;
`;

const Boton = styled.button`
  height: 2.2rem;
  background-color: #e64942;
  border: none;
  border-radius: 50px;
  max-width: calc(100% - 1rem);
  transition: 0.3s ease;
  padding: 5px;
  &:hover {
    background-color: #b83a34;
    opacity: 0.9;
    cursor: pointer;
  }
`;

const Cliente = () => {
  const router = useRouter();
  const { clienteId } = router.query;

  const [cliente, guardarCliente] = useState({});
  const [token, guardarToken] = useState('');
  const [cargando, guardarCargando] = useState(true);
  const [notanueva, guardarNotaNueva] = useState('');

  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      guardarToken(tokenLocal);
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        guardarCargando(true);
        const clientes = await axios({
          method: 'GET',
          url: `${URL}/plataforma/usuarios/${clienteId}`,
          headers: {
            Authorization: tokenLocal
          }
        });
        if (clientes.status === 401) {
          Router.push('/login');
        }
        guardarCliente(clientes.data.Mensaje);

        // console.log(clientes.data.Mensaje);
        console.log('volviendo a consultar');
      }
    };
    consultar();
  }, [cargando]);

  const eliminarCliente = () => {
    const eliminar = async () => {
      await axios({
        method: 'DELETE',
        url: `${URL}/plataforma/usuarios/${clienteId}`,
        headers: {
          Authorization: token
        }
      });
    };

    swal({
      title: 'Estás seguro?',
      text: 'Una vez eliminado no se puede recuperar el cliente!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        swal('Se ha eliminado el usuario correctamente', {
          icon: 'success'
        });
        eliminar();
        Router.push('/plataforma');
      } else {
        swal('No se ha borrado tu usuario');
      }
    });
  };

  const notaHandler = (e) => {
    guardarNotaNueva(e.target.value);
  };

  const subirNuevaNota = async (e) => {
    e.preventDefault();
    if (notanueva !== '') {
      const notaAgregada = await axios({
        method: 'PUT',
        url: `${URL}/plataforma/usuarios/agregarNota/${clienteId}`,
        data: {
          nota: notanueva
        },
        headers: {
          Authorization: token
        }
      });
      guardarNotaNueva('');
      guardarCargando(false);
      // console.log(notaAgregada.data.clienteNuevo.notas);
    } else {
      swal('Error', 'La nota no puede ir vacía', 'warning');
      guardarNotaNueva('');
    }
  };

  const eliminarNota = async (id) => {
    console.log(id);
    const notaEliminada = await axios({
      method: 'DELETE',
      url: `${URL}/plataforma/usuarios/eliminarNota/${id}/`,
      headers: {
        Authorization: token
      }
    });
    guardarCargando(false);
  };

  return (
    <PlataformaLayout>
      <Contenedor>
        <div style={{ maxWidth: '80%' }}>
          {/* <p>{cliente._id} </p>
      <p>{cliente.creadoPor} </p> */}
          {!cargando ? <p>Hola</p> : null}
          <p>
            <strong>Nombre:</strong> {cliente.nombre}
          </p>
          <p>
            <strong>RFC:</strong> {cliente.rfc}
          </p>
          <p>
            <strong>Nombre conagua:</strong> CONAGUA{cliente.nombreConagua}
          </p>
          <p>
            <strong>Contraseña Conagua:</strong> {cliente.passwordConagua}
          </p>
          <p>
            <strong>Número de Titulo:</strong> {cliente.numTitulo}
          </p>
          <p>
            <strong>Número de solicitud o expediente:</strong>
            {cliente.numSolicitud}
          </p>
          <p>
            <strong>Ciudad:</strong> {cliente.ciudad}
          </p>
          {cliente.fechaMaxima ? (
            <>
              <p>
                <strong>Fecha máxima:</strong>
                {moment(cliente.fechaMaxima).format('L')}
              </p>
              <p>
                En {moment(cliente.fechaMaxima).locale('es').fromNow()}
                se vence plazo máximo
              </p>
            </>
          ) : null}
          <p>
            <strong>Estatus:</strong> {cliente.estatus}
          </p>
          <div>
            {cliente.notas
              ? cliente.notas.map((n, i) => (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '12px'
                    }}
                  >
                    <p key={n._id} style={{ maxWidth: '80%' }}>
                      <strong>Nota #{i}:</strong> {n.nota}
                    </p>
                    <button
                      style={{
                        display: 'block',
                        borderWidth: '1px',
                        maxWidth: '20px',
                        borderRadius: '50%',
                        width: '20px',
                        maxHeight: '20px',
                        backgroundColor: '#e64942',
                        cursor: 'pointer'
                      }}
                      key={n._id.toString().concat(i)}
                      onClick={() => eliminarNota(n._id)}
                    >
                      -
                    </button>
                  </div>
                ))
              : null}
            <form
              onSubmit={subirNuevaNota}
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <input
                type='text'
                name='nota'
                placeholder='nota'
                value={notanueva}
                onChange={notaHandler}
              />
              <input
                type='submit'
                value='+'
                style={{
                  display: 'block',
                  borderWidth: '1px',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#e64942',
                  cursor: 'pointer',
                  backgroundColor: '#c9e8f9',
                  borderColor: '#b4d0e0'
                }}
              />
            </form>
          </div>

          <Botones>
            <Boton
              onClick={() =>
                Router.push(
                  `/plataforma/cliente/editar/[editarId]`,
                  `/plataforma/cliente/editar/${clienteId}`
                )
              }
            >
              Editar Cliente
            </Boton>

            <Boton onClick={eliminarCliente}>Eliminar cliente</Boton>
          </Botones>
        </div>
      </Contenedor>
      {/* <Link
        href='/plataforma/editar/[editarId]'
        as={`/plataforma/editar/${cliente._id}`}
        
      >
        <a>Editar cliente</a>
      </Link> */}

      <Link href='/plataforma'>
        <a>Regresar a tus usuarios</a>
      </Link>
    </PlataformaLayout>
  );
};

export default Cliente;
