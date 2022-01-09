import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#333333',
    },
    secondary: {
      main: '#333333',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#7ED320',
    },
    background: {
      paper: '#7ED320',
      default: '#EFEFEF94',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
          borderWidth: 2,
          borderColor: '#FFFFFF',
          height: 35,
          padding: '0px 25px',
          boxShadow: '0px 3px 6px #00000029',
          ':hover': {
            borderRadius: 0,
            borderWidth: 2,
          },
        },
        contained: {
          borderRadius: '19px',
          border: '1px solid #707070',
          '&.MuiButton-containedSizeMedium': {
            height: '80px',
            padding: '0px 86px',
            fontSize: '35px',
          },
          '&.MuiButton-containedSizeLarge': {
            height: '107px',
            padding: '0px 32px',
            fontSize: '35px',
            borderRadius: '10px',
            boxShadow: '0px 3px 6px #00000029',
            border: 'none',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '70px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '50px',
    },
    h4: {
      fontFamily: 'Helvetica',
      fontSize: 18,
    },
  },
});
