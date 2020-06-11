import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contenedor: {
    padding: '0.5rem',
    border: '0.5px solid red',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '50vw'
  },
  texto: {
    textAlign: 'center'
  }
});

const Anuncio = ({ texto }) => {
  const clases = useStyles();
  return (
    <div className={clases.contenedor}>
      <p className={clases.texto}>{texto}</p>
    </div>
  );
};

export default Anuncio;
