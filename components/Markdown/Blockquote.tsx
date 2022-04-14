import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface BlockquoteProps {
  children: React.ReactNode;
}
const Blockquote: React.FC<BlockquoteProps> = ({ children }): JSX.Element => (
  <Box borderLeft='2px' borderLeftColor='red' paddingY={1} paddingX='1em' background={useColorModeValue('gray.50', 'gray.900')}>
    {children}
  </Box>
);

export default Blockquote;
