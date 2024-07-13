import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Router } from './componets/Routes/Router.tsx'
import { MovieProvider } from './componets/MovieContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieProvider>
    <Router/>
    </MovieProvider>
  </React.StrictMode>,
)
