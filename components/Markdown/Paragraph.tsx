import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

const Paragraph: React.FC<TextProps> = (props) => (
  <Text as='p' fontSize={['sm', 'md']} fontWeight='normal' wordBreak='break-word' margin='1em 0' lineHeight='tall' {...props} />
);

export default Paragraph;
