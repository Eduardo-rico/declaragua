import styled from '@emotion/styled';

const BotonCancelar = styled.button`
  height: 2.2rem;
  background-color: #4cb3ec;
  border: none;
  border-radius: 50px;
  transition: 0.3s ease;
  color: black;
  padding: 0.6rem;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: red;
    opacity: 0.9;
    cursor: pointer;
  }
`;

export default BotonCancelar;
