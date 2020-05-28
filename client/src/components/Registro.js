import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import axios from 'axios';

const Registro = ({ saveStart, guardarIdUsuario }) => {
  const [datos, guardarDatos] = useState({});
  const formulario = (e) => {
    guardarDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const registro = async (e) => {
    e.preventDefault();
    if (Object.keys(datos).length === 0) return null;

    const respuesta = await axios({
      method: 'post',
      url: 'https://declarap.herokuapp.com/agregarUsuario',
      data: {
        nombre: datos.nombre,
        telefono: datos.telefono,
        estado: datos.estado,
        municipio: datos.municipio
      }
    });
    guardarIdUsuario(respuesta.data._id.toString());
    // console.log(respuesta.data);
    // console.log(respuesta.data._id.toString());
    saveStart(false);
  };

  return (
    <form onSubmit={registro}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <Grid item xs={12}>
          <TextField
            label='Nombre'
            type='text'
            name='nombre'
            onChange={formulario}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Email'
            type='text'
            name='correo'
            onChange={formulario}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Telefono o Email'
            type='text'
            name='telefono'
            onChange={formulario}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Estado'
            type='text'
            name='estado'
            onChange={formulario}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Municipio'
            type='text'
            name='municipio'
            onChange={formulario}
          />
        </Grid>
        <Grid item>
          <Button type='submit' color='primary' variant='contained'>
            Empezar encuesta
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registro;
