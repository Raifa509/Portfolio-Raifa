import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className='min-h-screen relative'>
      {/* background effect */}
      <Background />

      <div className="relative z-10">
        {/* navbar */}
        <Navbar/>
        {/* main content */}

        {/* footer */}
      </div>


    </div>
  )
}

export default Home