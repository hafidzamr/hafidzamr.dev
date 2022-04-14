import React from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children, ...props }) => (
  <Heading as='h2' fontSize={['1em', '1.5em']} color={useColorModeValue('gray.800', 'glow.10')} marginY={4} {...props}>
    {children}
  </Heading>
);

export default H2;
