import React from 'react';
import { Text as TextChakra, TextProps as TextChakraProps, forwardRef } from '@chakra-ui/react';
import { ThemeTypings } from '@chakra-ui/styled-system';

export interface TextProps extends TextChakraProps {
  lightColor?: ThemeTypings['colors'];
  darkColor?: ThemeTypings['colors'];
}

const Text: React.FC<TextProps> = forwardRef<TextProps, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'>(
  ({ lightColor, darkColor, children, ...rest }, ref) => (
    <TextChakra ref={ref} _dark={{ color: darkColor }} _light={{ color: lightColor }} {...rest}>
      {children}
    </TextChakra>
  ),
);

export default Text;
