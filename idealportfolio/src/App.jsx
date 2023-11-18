import { useState } from 'react'

import './App.css'
import Navbartop from './Components/Navbartop'
import Hero from './components/Hero'
import Projects from './components/projects'
import Skills from './components/skills'
import WebFooter from './components/WebFooter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbartop/>
    <Hero/>
    <Projects/>
    <Skills/>
    <WebFooter/>
   
    
    </>
  )
}

export default App
