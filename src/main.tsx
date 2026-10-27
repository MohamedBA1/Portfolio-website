import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure dark mode class is permanently applied on root element
document.documentElement.classList.add('dark');
localStorage.setItem('vite-ui-theme', 'dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
