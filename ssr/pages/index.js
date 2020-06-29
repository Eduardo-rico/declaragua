import Link from 'next/link';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Entrar = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid blue;
  border-radius: 5px;
  padding: 10px;

  a  {
    margin-right: 0.5rem;
    text-decoration: none;
    cursor: pointer;
  }
  a:last-of-type {
    margin-right: 0;
  }
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <Layout>
      <Contenedor>
        <Entrar>
          <Link href='/signup'>
            <a>Crear cuenta</a>
          </Link>
          <Link href='/login'>
            <a>Iniciar sesión</a>
          </Link>
        </Entrar>
      </Contenedor>
    </Layout>
  );
}
