import React from 'react';
import { UnorderedList as UnorderedListChakra } from '@chakra-ui/react';

interface UnorderedListProps {
  children: React.ReactNode;
}

const UnorderedList: React.FC<UnorderedListProps> = ({ children, ...props }) => (
  <UnorderedListChakra my={4} spacing={2} ml={10} {...props}>
    {children}
  </UnorderedListChakra>
);

export default UnorderedList;
