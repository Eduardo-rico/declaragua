import React from 'react';

const ResumenAgua = () => {
  return (
    <div>
      <p>Volumen: 20,000 m^3</p>
      <p>Acuífero: Xichú - Atarjea</p>
      <p>Precio: $12</p>
      <p>Vendedor: Pánfilo Inmaculado</p>
      <div>
        <p>posiblesCompradores:</p>
        <ul>
          <li>Macarena González</li>
          <li>Girafaela Martinez</li>
        </ul>
      </div>
      <div>
        <p>Observaciones:</p>
        <ul>
          <li>Hablarle a Procopio Hernández</li>
          <li>Verificar si está completo el trámite</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumenAgua;
