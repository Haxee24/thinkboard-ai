import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import AppProviders from './utils/AppProviders.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
