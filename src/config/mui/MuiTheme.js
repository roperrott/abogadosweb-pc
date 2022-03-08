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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          paddingBottom: 10,
          paddingLeft: 10,
          fontWeight: 600,
          fontSize: 18,
          color: '#333333',
          transform: 'none',
          '&.Mui-focused': {
            color: '#333333',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minHeight: 120,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          required: true,
          height: 60,
          fontSize: '16px',
          border: '1px solid #707070',
          '&.MuiOutlinedInput-root': {
            borderRadius: 60,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '16px 20px',
        },
        multiline: {
          height: 258,
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
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
          '&.MuiButton-sizeLarge ': {
            borderRadius: 9.8,
            height: 57.5,
            fontSize: 20,
            borderWidth: 1,
            fontWeight: 500,
          },
        },
        contained: {
          borderRadius: 19,
          border: '1px solid #707070',
          '&.MuiButton-containedSizeMedium': {
            height: 50,
            fontSize: 18,
          },
          '&.MuiButton-containedSizeLarge': {
            minHeight: 107,
            padding: '0px 32px',
            fontSize: 35,
            borderRadius: 10,
            boxShadow: '0px 3px 6px #00000029',
            border: 'none',
          },
          '&.MuiButton-containedSizeSmall': {
            height: 47.6,
            borderRadius: 21,
            fontSize: 14.7,
            fontWeight: 600,
            border: 'none',
            color: '#FFFFFF',
            padding: '0px 14px',
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        '&.MuiButton-startIcon': {
          fontSize: 23,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          width: 365,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 3px 6px #00000029',
          justifyContent: 'baselined',
          borderRadius: 89.6,
          paddingBottom: 23.8,
          marginTop: 40,
          '&.MuiNewsCard': {
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            boxShadow: 'none',
            border: 'none',
            padding: '30px 0px',
            borderRadius: 0,
            marginLeft: '40px',
            marginRight: '40px',
            borderBottom: '2px solid #00000029',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          maxWidth: 500,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&.MuiNewsCardContent': {
            height: 290,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Lato',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      fontSize: 70,
    },
    h2: {
      fontWeight: 600,
      fontSize: 50,
    },
    h3: {
      fontWeight: 700,
      fontSize: 47,
    },
    h4: {
      fontFamily: 'Helvetica',
      fontSize: 18,
    },
    h5: {
      fontWeight: 500,
      fontSize: 33,
      color: '#333333',
    },
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 20,
      color: '#707070',
    },
    body1: {
      fontWeight: 400,
      fontSize: 34,
      '&.MuiListItemText-primary': {
        fontSize: 21,
        fontWeight: 600,
        color: '#FFFFFF',
      },
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: 20,
      color: '#707070',
      textAlign: 'center',
    },
  },
});
