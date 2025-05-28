// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import '../src/i18n';

// Theme: Dark with purple accent
const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  colors: {
    brand: {
      900: "#190a2d",
      800: "#361540",
      700: "#6e38b4",
      600: "#a47aff",
      500: "#cc9bff"
    },
    accent: {
      500: "#854ff6",
      400: "#a177fa"
    }
  }
});

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default MyApp