import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import { StyledToastConatiner } from '@/component/toast/style'

// styles
import '@/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <StyledToastConatiner />
    </React.StrictMode>
  </BrowserRouter>,
)
