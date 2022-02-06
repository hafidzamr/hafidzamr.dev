import React from 'react';
import { ListItem as ListItemChakra, Text } from '@chakra-ui/react';

const ListItem: React.FC = ({ children, ...props }): JSX.Element => (
  <ListItemChakra {...props}>
    <Text as='span' fontSize={['sm', 'md']}>
      {children}
    </Text>
  </ListItemChakra>
);

export default ListItem;
