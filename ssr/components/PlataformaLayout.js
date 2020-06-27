import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  text-align: center;
`;
const Footer = styled.footer`
  width: 100%;
  text-align: center;
`;

const Lateral = styled.aside`
  grid-column-start: span 3;
  border: 1px solid black;

  @media screen and (min-width: 768px) {
    grid-row-start: span 3;
    grid-column: 1/2;
    border: 1px solid black;
  }
  @media screen and (min-width: 1100px) {
    grid-row: 1/4;
    grid-column: 1/2;
    border: 1px solid black;
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

const PlataformaLayout = (props) => {
  return (
    <Fragment>
      <Header>
        <p>PRUEBA DEL LAYOUT DE LA PLATAFORMA</p>
      </Header>
      <ContenedorGeneral>
        <Lateral>
          <p>Esto es el Lateral</p>
        </Lateral>
        <Contenido>{props.children}</Contenido>

        <style jsx global>
          {`
            * {
              box-sizing: border-box;
            }
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
