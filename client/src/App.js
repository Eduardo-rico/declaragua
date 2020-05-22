import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Registro from './components/Registro';

function App() {
  const preguntas = [
    'De que estado nos visitas',
    'Te gusta la conagua?',
    'cual es tu correo',
    'cuanto estarrías dispuesto a pagar tanto por algo?',
    'cuanto es 2+2',
    'Eres fan de lopez-gatell?',
    'A ella le gusta la gasolina',
    'Sabes a chocolate?',
    'Hablas de canciones de los dosmiless'
  ];

  const [respuesta, guardarRespuesta] = useState('');
  const [contador, guardarContador] = useState(0);

  const [idUsuario, guardarIdUsuario] = useState('');

  const [start, saveStart] = useState(true);

  if (contador >= preguntas.length) return <h1>Gracias por participar</h1>;

  return (
    <div className='container'>
      {start ? (
        <Registro saveStart={saveStart} guardarIdUsuario={guardarIdUsuario} />
      ) : (
        <Formulario
          guardarRespuesta={guardarRespuesta}
          respuesta={respuesta}
          pregunta={preguntas[contador]}
          guardarContador={guardarContador}
          contador={contador}
          idUsuario={idUsuario}
        />
      )}
    </div>
  );
}

export default App;
