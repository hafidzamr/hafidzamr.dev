import React from 'react';
import { Button as ButtonChakra, ButtonProps as ButtonChakraProps, forwardRef } from '@chakra-ui/react';

export interface ButtonProps extends ButtonChakraProps {}

const Button: React.FC<ButtonProps> = forwardRef<ButtonProps, 'button'>(({ children, ...rest }, ref) => {
  return (
    <ButtonChakra ref={ref} {...rest}>
      {children}
    </ButtonChakra>
  );
});

export default Button;
