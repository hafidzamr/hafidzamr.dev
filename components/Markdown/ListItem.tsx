import React from 'react';
import { ListItem as ListItemChakra, Text } from '@chakra-ui/react';

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children, ...props }): JSX.Element => (
  <ListItemChakra {...props}>
    <Text as='span' fontSize={['sm', 'md']}>
      {children}
    </Text>
  </ListItemChakra>
);

export default ListItem;
