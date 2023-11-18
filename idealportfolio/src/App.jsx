import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbartop from './Components/Navbartop'
import Hero from './components/Hero'
import Projects from './components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbartop/>
    <Hero/>
    <Projects/>
    
    </>
  )
}

export default App
