import React from 'react';
import { OrderedList as OrderedListtChakra } from '@chakra-ui/react';

interface OrderedListProps {
  children: React.ReactNode;
}

const OrderList: React.FC<OrderedListProps> = ({ children, ...props }) => (
  <OrderedListtChakra my={4} spacing={2} ml={10} {...props}>
    {children}
  </OrderedListtChakra>
);

export default OrderList;
