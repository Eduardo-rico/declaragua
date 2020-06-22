import React, { Fragment } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import { Global, css } from '@emotion/core';

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          * {
            background-color: #ddd;
          }
        `}
      />
      <Head>
        <title>Rico Sotomayor - Declaragua</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
          integrity='sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI='
          crossOrigin='anonymous'
        />
      </Head>
      <NavBar />
      {props.children}
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
