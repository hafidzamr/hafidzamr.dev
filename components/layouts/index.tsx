import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>@hafidzamr_</title>
      </Head>
      <Navbar />
      <Container maxWidth='container.lg' marginTop={150}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
