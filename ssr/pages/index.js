import Link from 'next/link';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
// import { createGlobalStyle } from "styled-components";
// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css?family=Notable');
//   body {
//     font-family: 'Notable', sans-serif;
//   }
// `

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faMailBulk,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contenedor = styled.div`
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 500px) {
    max-width: calc(100vw - 100px);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Left = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  margin-right: 2px;
  flex-direction: column;
  overflow: scroll;
  background-color: #e7f4ff;
  @media screen and (min-width: 768px) {
    padding: 10px;
    flex-shrink: 1;
    display: block;
  }

  @media screen and (min-width: 1200px) {
  }
`;
const Rigth = styled.div`
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: #e7f4ff;
  -webkit-box-shadow: 10px 10px 138px -29px rgba(210, 233, 250, 1);
  -moz-box-shadow: 10px 10px 138px -29px rgba(210, 233, 250, 1);
  box-shadow: 10px 10px 138px -29px rgba(210, 233, 250, 1);

  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7f4ff;
  max-width: 300px;
`;

const Imagen = styled.img`
  border-radius: 50%;
`;

const PInformation = styled.p`
  text-align: left;
  margin: 6px;
  text-align: justify;
  text-justify: inter-word;
  &:first-of-type {
    margin-top: 30px;
  }
  svg {
    margin-right: 5px;
  }
`;

const LinksProfile = styled.a`
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Contenedor>
        <Left>
          <Avatar>
            <Imagen src='/avatar.jpeg' />
          </Avatar>
          <Contact>
            <PInformation>
              <FontAwesomeIcon icon={faInfoCircle} width='16' />
              Mi nombre es Eduardo Rico y soy químico computacional de la UNAM,
              soy estudiante de ingeniería en sistemas computacionales y
              programador web
            </PInformation>
            <PInformation>
              <FontAwesomeIcon icon={faCity} width='16' />
              Ciudad: CDMX
            </PInformation>
            <PInformation>
              <FontAwesomeIcon icon={faGithub} width='16' />
              <LinksProfile href='https://github.com/Eduardo-rico'>
                Eduardo-rico
              </LinksProfile>
            </PInformation>
            <PInformation>
              <FontAwesomeIcon icon={faMailBulk} width='16' />
              Contacto: eduardo@ricosotomayor.com
            </PInformation>
          </Contact>
        </Left>
        <Rigth>Proyectos</Rigth>
      </Contenedor>
    </Layout>
  );
}
