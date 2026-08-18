import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.styles.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Portfolio'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)
