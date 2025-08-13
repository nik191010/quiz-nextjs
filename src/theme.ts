import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864cbf',
    },
    secondary: {
      main: '#dbbb1c',
    },
    error: {
      main: '#ff3355',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.4rem',
    },
    body2: {
      fontSize: '1.2rem',
    },
    caption: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            backgroundColor: '#dbbb1c',
            color: '#000',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all 0.5s ease',
            '&:hover': {
              opacity: 0.8,
            },
          },
        },
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            backgroundColor: '#5E35B2',
            color: '#fff',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all 0.5s ease',
            '&:hover': {
              opacity: 0.8,
            },
          },
        },
        {
          props: { variant: 'text', color: 'error' },
          style: {
            backgroundColor: '#e74c3c',
            color: '#fff',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all .5s ease',
            '&:hover': {
              opacity: '.8',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: 'transparent',
            border: '1px solid #dbbb1c',
            color: '#dbbb1c',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all .5s ease',
            '&:hover': {
              backgroundColor: '#dbbb1c',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            backgroundColor: 'transparent',
            border: '1px solid #5E35B2',
            color: '#5E35B2',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all .5s ease',
            '&:hover': {
              backgroundColor: '#5E35B2',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'error' },
          style: {
            backgroundColor: 'transparent',
            color: '#e74c3c',
            border: '1px solid #e74c3c',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            transition: 'all .5s ease',
            '&:hover': {
              backgroundColor: '#e74c3c',
              color: '#fff',
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dbbb1c',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dbbb1c',
            borderWidth: '3px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // marginBottom: '1.2rem',
          width: '100%',
        },
        // helperText: {
        //   color: '#000',
        //   fontSize: '0.8rem',
        //   marginTop: '0',
        //   marginLeft: '0',
        // },
        // outlined: {
        //   '& .MuiOutlinedInput-root': {
        //     '& fieldset': {
        //       borderColor: '#dbbb1c',
        //       borderWidth: '2px',
        //     },
        //     '&.Mui-focused fieldset': {
        //       borderColor: '#5E35B2',
        //       borderWidth: '2px',
        //     },
        //   },
        // },
      },
    },
    MuiFormGroup: {
      // Moved FormGroup styles here
      styleOverrides: {
        root: {
          // marginBottom: '1rem',
        },
      },
    },
    MuiFormLabel: {
      // Combined MuiFormLabel styles
      styleOverrides: {
        root: {
          // fontWeight: 'bold',
          color: '#dbbb1c',
          textAlign: 'left',
          fontSize: '1.2rem',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          '& .MuiTypography-root': {
            fontSize: '1.1rem',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          textAlign: 'left',
          // marginBottom: '1rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // marginTop: '-10px',
          // marginLeft: '-10px',
          fontSize: '1.2rem',
          color: 'gray',
          '&.Mui-focused': {
            color: '#dbbb1c', // Label color when focused
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: '100%',
          textAlign: 'left',
          // marginBottom: '1rem',
        },
        outlined: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dbbb1c',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          transition: 'all 0.5s ease',
          '&:hover': {
            color: '#dbbb1c',
          },
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
