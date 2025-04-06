import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Hobby = lazy(() => import('./components/Hobby'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-[#f9f9f7]'>
      <Navbar />
      <Suspense fallback={<Loader />} >
        <Hero />
        <About />
        <Hobby />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
