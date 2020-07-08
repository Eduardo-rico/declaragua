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
        <title>Eduardo M. Rico Sotomayor</title>
        <meta charset='utf-8' />
        <meta
          name='description'
          content='Página personal de Eduardo Martín Rico Sotomayor y sus proyectos.'
        />
        <meta
          name='keywords'
          content='ricosotomayor, emrs, programacion, web, declaragua, conagua'
        />
        <meta name='author' content='Eduardo Martín Rico Sotomayor' />
        <meta name='copyright' content='Eduardo Martín Rico Sotomayor' />
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
