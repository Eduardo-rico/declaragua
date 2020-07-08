import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';
import Router from 'next/router';

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
`;

const Nav = styled.nav`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
`;

const ALi = styled.a`
  transition: all 0.3s ease 0s;

  &:hover {
    color: #0088a9;
  }
`;

const ButtonA = styled.button`
  margin-left: 10px;
  padding: 9px 20px;
  background-color: rgba(0, 139, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  max-width: 150px;

  &:hover {
    color: white;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  margin-right: auto;
  max-height: 60px;
`;

const NavBar = () => {
  return (
    <HeaderNav>
      <Link href='/'>
        <a>
          <Logo src='/logopng.png' />
        </a>
      </Link>
      <Nav>
        <ul>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>Portafolio</ALi>
            </Link>
          </Li>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>Curriculum</ALi>
            </Link>
          </Li>
          <Li>
            {' '}
            <Link href='#'>
              <ALi>Contacto</ALi>
            </Link>
          </Li>
        </ul>
        <ButtonA
          onClick={() => {
            Router.push('/declaragua');
          }}
        >
          Declaraciones Conagua
        </ButtonA>
      </Nav>
    </HeaderNav>
  );
};

export default NavBar;
