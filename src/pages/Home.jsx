import React from 'react'

import Navbar from '../components/Navbar'
import LandingPage from '../components/sections/LandingPage'
import Aboutme from '../components/sections/Aboutme'
import Skills from '../components/sections/Skills'


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
        {/* footer */}
      </div>


    </div>
  )
}

export default Home