import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme.config';

import { store } from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default MyApp;
