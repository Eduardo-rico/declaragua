import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

// const HeaderNav = styled.header``;

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>Hamburger</div>
        <div>
          <a>Logo</a>
        </div>
        <div>
          <ul>
            <li>
              <a>inicio</a>
            </li>
            <li>
              <a>usuarios</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
