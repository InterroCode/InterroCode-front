import { createTheme } from '@mui/material'
import { Colors } from '@/style/styles.ts'

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary,
    },
    secondary: {
      main: Colors.Secondary,
    },
  },
  typography: {
    fontFamily: 'Gmarket Sans',
  },
})

export default theme
