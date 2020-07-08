import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Avatar from './Avatar';
import Boton from './Boton';
import CerrarSesion from './CerrarSesion';
import Router from 'next/router';
import Link from 'next/link';

//cambiar el grid pls

const Header = styled.header`
  grid-area: header;
  height: 70px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e7f9fd;
  p {
    padding-left: 30px;
  }
`;
const Footer = styled.footer`
  grid-area: footer;
  height: 50px;
  align-self: end;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 12px;
      padding: 10px;
    }
  }
`;

const ContenedorGeneral = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'contenido'
    'footer';

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    grid-template-areas:
      'lateral header header'
      'lateral contenido contenido'
      'lateral contenido contenido'
      'footer footer footer';
  }

  @media screen and (min-width: 1100px) {
    grid-template-areas:
      'header header header'
      'lateral contenido contenido'
      'lateral contenido contenido'
      'footer footer footer';
  }
`;

const Lateral = styled.aside`
  grid-area: lateral;
  display: none;
  @media screen and (min-width: 768px) {
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: lateral;
    background-color: #e7f9fd;
    border-bottom-right-radius: 10px;
    padding: 30px 10px 10px 10px;
  }
  @media screen and (min-width: 1100px) {
    border-bottom-right-radius: 10px;
    max-width: 20vw;
  }
`;

const Contenido = styled.div`
  grid-area: contenido;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  min-height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);
  overflow: scroll;
  @media screen and (min-width: 768px) {
    border: 4px solid peru;
    min-width: 70vw;
  }
  @media screen and (min-width: 1100px) {
    border: 1px solid black;
    min-width: 80vw;
  }
`;

const Botones = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  cursor: pointer;
  margin-top: 10px;
  margin-left: 8.1vw;
  max-height: 60px;
`;

const PlataformaLayout = (props) => {
  // if (props.CerrarSesion) {
  //   const BotonCerrar = props.CerrarSesion;
  //   const BotonNuevo = props.NuevoCliente;
  // }

  return (
    <Fragment>
      <ContenedorGeneral>
        <Header>
          <Link href='/'>
            <a>
              <Logo src='/logopng.png' />
            </a>
          </Link>
          <CerrarSesion />
        </Header>
        <Lateral>
          <Avatar />
          <div>
            <p>
              TODO: PONER NUEVA INFORMACIÓN DEL USUARIO, POR EJEMPLO ULTIMO
              USUARIO CREADO O ALGO ASI{' '}
            </p>
          </div>
        </Lateral>
        <Contenido>{props.children}</Contenido>
        <Footer>
          <div>
            <p>Declaragua</p>
            <p>RicoSotomayor 2020.</p>
          </div>
        </Footer>

        <style jsx global>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              min-height: 100vh;
            }
          `}
        </style>
      </ContenedorGeneral>
    </Fragment>
  );
};

export default PlataformaLayout;
