import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Information from './components/info'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Information/>
  </StrictMode>,
)
