import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    offWhite: '#dfefff',
    darkGrey: '#333333',
    primaryBlue: '#3988ff',
    skyBlue: '#B2DAFF',
    cloudBlue: '#E5F2FF',
    lightBlue: '#F8FBFF'

  },
  fonts: {
    heading: 'Poppins, sans-serif',
    content: 'Source Sans Pro, sans-serif',
  },
  fontSizes: {
    small: '1em',
    small2: '1.3em',
    medium: '2em',
    medium2: '2.2em',
    large: '3em',
    larger: '4em',
  },
  viewport: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    monitor: '(min-width: 1600px)',
    xlmonitor: '(min-width: 2150px)',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;