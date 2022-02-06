import React from 'react';
import { OrderedList as OrderedListtChakra } from '@chakra-ui/react';

const OrderList: React.FC = ({ children, ...props }) => (
  <OrderedListtChakra my={4} spacing={2} ml={10} {...props}>
    {children}
  </OrderedListtChakra>
);

export default OrderList;
