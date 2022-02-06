import { AnchorHTMLAttributes, HTMLProps } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type LinkProps = HTMLProps<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ChakraLinkProps;

const Link: React.FC<LinkProps> = ({ href, ...props }): JSX.Element => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <ChakraLink {...props} />
      </NextLink>
    );
  }

  return (
    <ChakraLink href={href} textDecoration='underline' target='_blank' rel='noopener noreferrer' color='blue.500' {...props}>
      {props.children}
    </ChakraLink>
  );
};

export default Link;
