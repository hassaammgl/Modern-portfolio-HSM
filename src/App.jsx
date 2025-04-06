import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hobby from "./components/Hobby"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-[#f9f9f7]'>
      <Navbar />
      <Hero />
      <About />
      <Hobby />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
