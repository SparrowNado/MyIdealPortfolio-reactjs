import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbartop from './Components/Navbartop'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbartop/>
    <Hero/>
    
    </>
  )
}

export default App