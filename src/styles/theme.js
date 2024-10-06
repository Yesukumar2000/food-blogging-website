import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#FF5722',
      secondary: '#2196F3',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  styles: {
    global: {
      body: {
        fontSize: '16px',
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primaryDark',
          },
        },
        secondary: {
          bg: 'brand.secondary',
          color: 'white',
          _hover: {
            bg: 'brand.secondaryDark',
          },
        },
      },
    },
  },
});

export default theme;