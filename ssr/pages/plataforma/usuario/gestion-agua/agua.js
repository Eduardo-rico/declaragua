import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

import PlataformaLayout from '../../../../components/PlataformaLayout';
import ResumenAgua from '../../../../components/ResumenAgua';
import Boton from '../../../../components/Boton';
import { URL } from '../../../../constantes/constantes';

const Agua = () => {
  const [aguas, guardarAguas] = useState([]);


  useEffect(() => {
    const consultar = async () => {
      const tokenLocal = localStorage.getItem('token');
      if (!tokenLocal) {
        Router.push('/login');
      } else {
        const aguas = await axios({
          method: 'GET',
          url: `${URL}/plataforma/agua`,
          headers: {
            Authorization: tokenLocal
          }
        });
        guardarAguas(aguas.data.Mensaje);
        if (aguas.status === 401) {
          Router.push('/login');
        }
      }
    };
    consultar();
  }, [aguas]);

  return (
    <PlataformaLayout>
      <div>
        <Boton onClick={() => {
          Router.push('/plataforma/usuario/gestion-agua/crear-agua');
        }}>Crear nuevo registro de venta de agua</Boton>
        {aguas.map(dato => (
          <ResumenAgua dato={dato} key={dato._id} />
        ))}
      </div>
    </PlataformaLayout>
  );
};

export default Agua;
