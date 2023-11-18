import { useState } from 'react'

import './App.css'
import Navbartop from './components/Navbartop'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
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
