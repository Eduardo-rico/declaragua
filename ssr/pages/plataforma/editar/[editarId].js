import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Router from 'next/router';

import { URL } from '../../../constantes/constantes';
import Layout from '../../../components/Layout';

const Editar = () => {
  const router = useRouter();
  const { editarId } = router.query;
  return (
    <Layout>
      <div>
        <h1>
          <Link href='/plataforma'>
            <a>Plataforma</a>
          </Link>
        </h1>
        <p>Se edita el id {editarId}</p>
      </div>
    </Layout>
  );
};

export default Editar;
