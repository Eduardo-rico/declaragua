import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <main>
          <Link href='/signup'>
            <a>Crear cuenta</a>
          </Link>
          <Link href='/login'>
            <a>Iniciar sesión</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
