import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import RoutesRoot from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesRoot />
  </StrictMode>,
)
