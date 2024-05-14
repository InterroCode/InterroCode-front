import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import App from '@/App.tsx'

// style
import '@/global.css'
import { theme } from '@/style/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
