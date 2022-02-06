import React from 'react';
import NextImage from 'next/image';
import { Text, Box } from '@chakra-ui/react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }): JSX.Element => (
  <Box display='flex' justifyContent='center'>
    <figure>
      <NextImage src={src} alt={alt} {...props} loading='lazy' quality={100} objectFit='contain' />
      <figcaption>
        <Text as='span' fontSize='xs' color='gray.400'>
          {src}
        </Text>
      </figcaption>
    </figure>
  </Box>
);
export default Image;
