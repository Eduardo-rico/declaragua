import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Avatar from './Avatar';

//cambiar el grid pls

const Header = styled.header`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Footer = styled.footer`
  width: 100%;
  text-align: center;
`;

const Lateral = styled.aside`
  justify-content: center;
  grid-column-start: span 3;
  border: 1px solid black;
  @media screen and (min-width: 768px) {
    grid-row-start: span 3;
    grid-column: 1/2;
    border: 1px solid black;
    overflow: scroll;
  }
  @media screen and (min-width: 1100px) {
    grid-row: 1/4;
    grid-column: 1/2;
    border: 1px solid black;
    overflow: scroll;
  }
`;

const Contenido = styled.div`
  grid-column-start: span 3;
  border: 1px solid black;
  height: 900px;
  @media screen and (min-width: 768px) {
    grid-column-start: span 2;
    grid-row-start: span 4;
    border: 1px solid black;
  }
  @media screen and (min-width: 1100px) {
    grid-column: 2/7;
    border: 1px solid black;
  }
`;
const ContenedorGeneral = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid red;
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
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
      <Header>
        <p>PRUEBA DEL LAYOUT DE LA PLATAFORMA</p>
        <BotonCerrar />
      </Header>
      <ContenedorGeneral>
        <Lateral>
          <p>Esto es el Lateral</p>
          <Avatar />
          <Botones>
            <BotonNuevo />
          </Botones>
        </Lateral>
        <Contenido>{props.children}</Contenido>

        <style jsx global>
          {`
            body {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}
        </style>
      </ContenedorGeneral>

      <Footer>
        <p>Esto es el Footer</p>
      </Footer>
    </Fragment>
  );
};

export default PlataformaLayout;
