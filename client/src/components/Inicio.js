import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import {
  Paper,
  Container,
  Grid,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const estilos = makeStyles({
  pregunta: {
    marginTop: '15vw',
    padding: '1rem'
  },
  parrafo: {
    textAlign: 'center'
  }
});

const Inicio = ({ guardarInicio }) => {
  const [variableIntermedia, guardarVariableIntermedia] = useState(false);
  const [variableTexto, guardarVariableTexto] = useState(false);

  const aceptar = (e) => {
    guardarVariableIntermedia(e.target.checked);
  };

  const siguiente = () => {
    if (!variableIntermedia) {
      guardarVariableTexto(true);
    } else {
      guardarInicio(true);
    }
  };

  const clases = estilos();
  return (
    <Container maxWidth='sm'>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <div className={clases.pregunta}>
              <p className={clases.parrafo}>
                Obten 20% de descuento en tu proxima declaración trimestral de
                conagua contestando esta sencilla encuesta!
              </p>
              <FormControlLabel
                control={<Checkbox color='primary' onChange={aceptar} />}
                label='Aceptar terminos y condiciones'
              />

              <Button
                color='primary'
                onClick={() => {
                  siguiente();
                }}
              >
                Inscribirme a la encuesta!
              </Button>
              {variableTexto ? (
                <Alert severity='error'>
                  Debes de aceptar terminos y condiciones
                </Alert>
              ) : null}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inicio;
