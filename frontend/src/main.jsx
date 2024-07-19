import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import { ThemeProvider } from './components/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <ThemeProvider>
  <SnackbarProvider>
    <App className="dark:bg-slate-800" />
    </SnackbarProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
