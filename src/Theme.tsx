import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    offWhite: '#dfefff',
    darkGrey: '#333333',
    textBlack: '#484848',
    primaryBlue: '#3988ff',
    skyBlue: '#B2DAFF',
    cloudBlue: '#E5F2FF',
    borderBlue: '#93C9FE'
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    content: 'Source Sans Pro, sans-serif',
  },
  fontSizes: {
    small: '1em',
    regular: '1.5em',
    medium: '2em',
    large: '3em',
  },
  viewport: {
    mobile: '(min-width: 320px)',
    mediumMobile: '(min-width: 390px)',
    widerMobile: '(min-width: 500px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    hover: '(hover:hover)'
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;