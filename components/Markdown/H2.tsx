import React from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

const H2: React.FC = ({ children, ...props }) => (
  <Heading as='h2' fontSize={['1em', '1.5em']} color={useColorModeValue('gray.800', 'glow.10')} marginY={4} {...props}>
    {children}
  </Heading>
);

export default H2;
