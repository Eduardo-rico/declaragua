import React, { useState } from 'react';
import axios from 'axios';

const Registro = ({ saveStart, guardarIdUsuario }) => {
  const [datos, guardarDatos] = useState({});
  const formulario = (e) => {
    guardarDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const registro = async (e) => {
    e.preventDefault();
    if (Object.keys(datos).length === 0)
      return console.log('Llena los datos hijo de tu putisima madre');

    // const respuesta = await fetch('http://localhost:5256/agregarUsuario', {
    //   method: 'POST',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: JSON.stringify(datos)
    // });

    // console.log(datos);
    const respuesta = await axios({
      method: 'post',
      url: 'http://localhost:5256/agregarUsuario',
      data: {
        nombre: datos.nombre,
        telefono: datos.telefono,
        estado: datos.estado
      }
    });
    guardarIdUsuario(respuesta.data._id.toString());
    // console.log(respuesta.data);
    // console.log(respuesta.data._id.toString());
    saveStart(false);
  };

  return (
    <form onSubmit={registro} className='registro'>
      <div>
        <label>NOMBRE</label>
        <input type='text' name='nombre' onChange={formulario} />
      </div>
      <div>
        <label>TELEFONO</label>
        <input type='text' name='telefono' onChange={formulario} />
      </div>
      <div>
        <label>ESTADO</label>
        <input type='text' name='estado' onChange={formulario} />
      </div>
      <div>
        <button>Empezar encuesta</button>
      </div>
    </form>
  );
};

export default Registro;
