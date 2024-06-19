import { createTheme } from '@mui/material/styles';
import type { Theme } from '@emotion/react';
import typography from './typography';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6200EE',
      dark: '#3700B3',
    },
    secondary: {
      main: '#03DAC6',
      dark: '#018786',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography,
});

export default theme;
