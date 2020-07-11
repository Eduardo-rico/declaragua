import React from 'react';
import PlataformaLayout from '../../../../components/PlataformaLayout';
import ResumenAgua from '../../../../components/ResumenAgua';
import Boton from '../../../../components/Boton';

const Agua = () => {
  return (
    <PlataformaLayout>
      <div>
        <Boton>Crear nueva nota</Boton>
        <p>Mostrar en cards todas las cosas de compra venta del agua</p>
        <ResumenAgua />
      </div>
    </PlataformaLayout>
  );
};

export default Agua;
