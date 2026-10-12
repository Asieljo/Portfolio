import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './features/theme/ThemeProvider';
import './styles/index.styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/Portfolio'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
