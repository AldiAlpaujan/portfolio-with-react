// Import AOS CSS
import 'aos/dist/aos.css';

// Import AOS
import AOS from 'aos';

// Inisialisasi AOS
AOS.init({});

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './icons.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
