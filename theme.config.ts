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
  }),
};

const config: ThemeConfig = {
  // useSystemColorMode: true, //true | false,
  initialColorMode: 'dark', // ligth || dark || system,
  cssVarPrefix: 'ui',
};

export const theme = extendTheme({ config, styles, ...foundations, components });
