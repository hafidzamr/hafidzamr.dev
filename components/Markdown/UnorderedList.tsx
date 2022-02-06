import React from 'react';
import { UnorderedList as UnorderedListChakra } from '@chakra-ui/react';

const UnorderedList: React.FC = ({ children, ...props }) => (
  <UnorderedListChakra my={4} spacing={2} ml={10} {...props}>
    {children}
  </UnorderedListChakra>
);

export default UnorderedList;
