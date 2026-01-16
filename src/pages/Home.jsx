import React from 'react'

import Navbar from '../components/Navbar'
import LandingPage from '../components/sections/LandingPage'
import Aboutme from '../components/sections/Aboutme'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'


function Home() {
  return (
    <div className='min-h-screen relative'>


      <div className="relative z-10">
        {/* navbar */}
        <Navbar/>
        {/* main content */}
        <LandingPage/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
        {/* footer */}
      </div>


    </div>
  )
}

export default Home