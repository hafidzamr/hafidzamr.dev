import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import { MetaType } from './types';

const Layout: React.FC<MetaType> = ({
  children,
  title = '@hafidzamr_',
  description = 'About Hafidz Amrulloh',
  url = 'https://hafidzamr.dev/',
  image,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='title' content='@hafidzamr' />
      <meta name='description' content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://hafidzamr.dev/' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
    <Navbar />
    <Container maxWidth='container.md' marginTop={[50, 150]}>
      {children}
    </Container>
  </>
);

export default Layout;
