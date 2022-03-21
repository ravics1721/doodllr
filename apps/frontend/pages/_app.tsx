import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.css';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default App;
