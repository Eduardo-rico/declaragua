import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

const HeaderNav = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
`;

const Nav = styled.nav`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 20px;
  pointer
`;

const ALi = styled.a`
  transition: all 0.3s ease 0s;

  &:hover {
    color: #0088a9;
  }
`;

const ButtonA = styled.button`
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(0, 139, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    color: rgba(0, 139, 169, 0.8);
  }
`;

const Logo = styled.p`
  cursor: pointer;
  margin-right: auto;
`;

const NavBar = () => {
  return (
    <HeaderNav>
      <Logo>Logo</Logo>
      <nav>
        <ul>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>Servicios</ALi>
            </Link>
          </Li>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>contacto</ALi>
            </Link>
          </Li>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>proyectos</ALi>
            </Link>
          </Li>
        </ul>
      </nav>

      <ALi>
        <ButtonA>Contacto</ButtonA>
      </ALi>
    </HeaderNav>
  );
};

export default NavBar;
