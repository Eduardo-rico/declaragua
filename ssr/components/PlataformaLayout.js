import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Avatar from './Avatar';

//cambiar el grid pls

const Header = styled.header`
  grid-area: header;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
const Footer = styled.footer`
  grid-area: footer;
  height: 100px;
  border: solid 2px peru;
  align-self: end;
`;

const ContenedorGeneral = styled.div`
  display: grid;
  align-content: stretch;
  grid-template-areas:
    'header'
    'lateral'
    'contenido'
    'footer';

  @media screen and (min-width: 768px) {
    grid-template-areas:
      'header header header'
      'lateral contenido contenido'
      'lateral contenido contenido'
      'footer footer footer';
  }
`;

const Lateral = styled.aside`
  grid-area: lateral;
  @media screen and (min-width: 768px) {
    border: 1px solid black;
  }
  @media screen and (min-width: 1100px) {
    border: 1px solid black;
  }
`;

const Contenido = styled.div`
  grid-area: contenido;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  @media screen and (min-width: 768px) {
    border: 4px solid peru;
  }
  @media screen and (min-width: 1100px) {
    border: 1px solid black;
  }
`;

const Botones = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const PlataformaLayout = (props) => {
  const BotonCerrar = props.CerrarSesion;
  const BotonNuevo = props.NuevoCliente;

  return (
    <Fragment>
      <ContenedorGeneral>
        <Header>
          <p>PRUEBA DEL LAYOUT DE LA PLATAFORMA</p>
          <BotonCerrar />
        </Header>
        <Lateral>
          <p>Esto es el Lateral</p>
          <Avatar />
          <p>Esto es el Lateral</p>
          <Botones>
            <BotonNuevo />
          </Botones>
        </Lateral>
        <Contenido>{props.children}</Contenido>
        <Footer>
          <p>Esto es el Footer</p>
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
