import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Styles, mode } from '@chakra-ui/theme-tools';

// Foundation
import foundations from './theme/foundations';

// Components
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
  initialColorMode: 'system', // ligth || black || system,
  cssVarPrefix: 'ui',
};

export const theme = extendTheme({ config, styles, ...foundations, components });
