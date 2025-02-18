import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Primer from './Primer.jsx'
import { Second } from './Second.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Primer />
      <Second />
    </>
  </StrictMode>,
)
