import Link from 'next/link';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <Layout>
      <Contenedor></Contenedor>
    </Layout>
  );
}
