import { useState } from 'react'

import './App.css'
import Navbartop from './components/Navbartop'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WebFooter from './components/WebFooter'
import Experience from './components/Experience'



function App() {
 

  return (
    <>

    <Navbartop/>
    <Hero/>
    <Projects/>
    <Experience />
    <Skills/>
    <WebFooter/>
   
    
    </>
  )
}

export default App
