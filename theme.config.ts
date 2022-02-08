import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Styles, mode } from '@chakra-ui/theme-tools';

import foundations from '@/theme/foundations';
import components from '@/theme/components';

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode('#fff', 'dark.30')(props),
      fontFamily: "'Jost', sans-serif",
    },

    h1: {
      display: 'block',
      fontSize: '2em',
      fontWeight: 'bold',
      margin: '0.67em 0',
    },

    h2: {
      display: 'block',
      fontSize: '1.5em',
      fontWeight: 'bold',
      margin: '0.83em 0',
      scrollMarginTop: '5em',
    },
    h3: {
      display: 'block',
      fontSize: '1.17em',
      fontWeight: 'bold',
      margin: '1em 0',
      scrollMarginTop: '5em',
    },
    h4: {
      display: 'block',
      fontWeight: 'bold',
      margin: '1.33em 0',
      scrollMarginTop: '5em',
    },
    h5: {
      display: 'block',
      fontSize: '.83em',
      fontWeight: 'bold',
      margin: '1.67em 0',
    },
    h6: {
      display: 'block',
      fontSize: '67em',
      fontWeight: 'bold',
      margin: '2.33em 0',
    },
    '.anchor': {
      position: 'absolute',
      marginLeft: '-0.8em',
      visibility: 'hidden',
      maxWidth: 'container.md',
      width: '100%',
    },
    '.anchor:after': {
      color: mode('gray.300', 'gray.500')(props),
      content: '"#"',
    },
    '.anchor:hover': {
      visibility: 'visible',
      textDecorationLine: 'none !important',
    },

    '*:hover > .anchor ': {
      visibility: 'visible',
      textDecorationLine: 'none',
    },

    '.token.prolog, .token.doctype, .token.cdata': {
      color: mode('gray.700', 'gray.300')(props),
    },

    '.token.comment': {
      color: 'gray.500',
    },

    '.token.punctuation': {
      color: mode('gray.700', 'gray.300')(props),
    },

    '.token.property, .token.tag, .token.boolean, .token.number, .token.contant, .token.symbol, .token.deleted': {
      color: 'green.500',
    },

    '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
      color: 'purple.500',
    },

    '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
      color: 'yellow.500',
    },

    '.token.atrule, .token.attr-value, .token.keyword': {
      color: 'blue.500',
    },

    '.token.function, .token.class-name': {
      color: 'pink.500',
    },

    '.token.regex, .token.important, .token.variable': {
      color: 'yellow.500',
    },

    '.rehype-code-title': {
      paddingX: 5,
      paddingY: 3,
      fontFamily: 'monospace',
      fontSize: 'sm',
      fontWeight: 'bold',
      color: mode('gray.800', 'gray.200')(props),
      backgroundColor: mode('gray.200', 'gray.800')(props),
      border: '1px solid',
      borderColor: mode('gray.200', 'gray.700')(props),
      borderBottom: 'none',
      borderTopRadius: 'md',
    },
    '.rehype-code-title + pre': {
      marginTop: '0',
      borderTopRadius: '0',
    },
    '.heighlight-line': {
      display: 'block',
      paddingX: 4,
      marginX: 4,
      background: mode('gray.100', 'gray.800')(props),
      borderLeft: '4px solid',
      borderLeftColor: 'blue.500',
    },
  }),
};

const config: ThemeConfig = {
  // useSystemColorMode: true, //true | false,
  initialColorMode: 'dark', // ligth || dark || system,
  cssVarPrefix: 'ui',
};

export const theme = extendTheme({ config, styles, ...foundations, components });
