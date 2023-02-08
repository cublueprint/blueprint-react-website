import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    offWhite: '#dfefff',
    darkGrey: '#333333',
    primaryBlue: '#3988ff',
    skyBlue: '#B2DAFF',
    cloudBlue: '#E5F2FF',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    content: 'Source Sans Pro, sans-serif',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  viewport: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;