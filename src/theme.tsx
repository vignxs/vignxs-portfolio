import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D9EAFB', // Light Sky Blue
      light: '#81D4FA',
      dark: '#29B6F6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A6D8F8', // Sky Blue
      light: '#4FC3F7',
        dark: '#0288D1', 
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF', // Very Light Sky Blue
      paper: '#D9EAFB',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
