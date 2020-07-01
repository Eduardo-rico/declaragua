import React from 'react';
import styled from '@emotion/styled';

const ImagenAvatar = styled.div`
  width: 90px;
  height: 90px;
  background-color: red;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 100px;
`;

const Informacion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Avatar = () => {
  return (
    <div>
      <ImagenAvatar />
      <Informacion>
        <p>Nombre del Usr</p>
        <p>TODO: AJAX nombre de usuario</p>
      </Informacion>
    </div>
  );
};

export default Avatar;
