import React from 'react';
import { Code as ChakraCode, CodeProps, useColorModeValue } from '@chakra-ui/react';

const Code = (props: CodeProps) => (
  <ChakraCode
    as='code'
    fontFamily='mono'
    fontSize={['xs', 'sm']}
    color={useColorModeValue('gray.800', 'gray.200')}
    background={useColorModeValue('gray.50', 'gray.900')}
    paddingX={2}
    borderRadius='md'
    {...props}
  />
);

export default Code;
