import React from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

const Pre = (props: BoxProps) => (
  <Box
    as='pre'
    overflowX='auto'
    border='solid 1px'
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    background={useColorModeValue('gray.50', 'gray.900')}
    borderRadius='md'
    padding={4}
    marginBottom='1.5em'
    {...props}
  />
);

export default Pre;
