import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TotalCarbon from "./pages/dashboard"
import HighLowcarbon from "./pages/logs"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header title='EXPERIMENT 1' style={{fontSize:'70px',backgroundColor:"grey"}}>Experiment 1: ECOTRACK</header>
      <main style={{padding:"0.5rem"}}>
        <TotalCarbon/>
        <HighLowcarbon/>
      </main>
    </>
  )
}

export default App
