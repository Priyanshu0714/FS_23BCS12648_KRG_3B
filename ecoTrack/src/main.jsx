import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import TotalCarbon from "./pages/dashboard"
// import HighCarbon from "./pages/logs"
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
