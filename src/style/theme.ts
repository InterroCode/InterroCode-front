import { createTheme } from '@mui/material'

import { Colors } from '@/style/styles.ts'

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary,
      light: Colors.Secondary,
    },
  },
  typography: {
    fontFamily: 'Gmarket Sans',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
