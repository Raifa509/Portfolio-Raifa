import React from 'react'

function Aboutme() {
    return (
        <div className='min-h-screen mt-5  md:mx-30 '>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-0.25 w-110 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>About ME</h1>
                <div className='h-0.25 w-110 bg-heading opacity-90'></div>

            </div>
            <div className='mt-25 mx-50 text-heading opacity-90'>
                <p className="text-lg mb-6 text-justify text-heading opacity-90">
                    Hi! I’m Fathimathul Raifa, an MCA graduate and MERN Stack Developer. I build fullstack web applications, craft responsive user interfaces, and enjoy turning ideas into practical digital solutions. I’m always learning new technologies to create impactful experiences.
                </p>
        <div>
    <h3 className="text-2xl font-semibold mb-5 mt-10 text-heading opacity-90 ">What I Can Do</h3>
    <ul className="flex flex-wrap gap-4">
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">MERN Stack Development</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Frontend Interfaces (React , Nextjs)</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Backend Logic & APIs</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">WordPress Development</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">UI/UX Design (Figma)</li>
    </ul>
  </div>

  <div>
    <h3 className="text-2xl font-semibold mb-5 mt-10 text-heading opacity-90">Soft Skills</h3>
    <ul className="flex flex-wrap gap-4">
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Problem Solving</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Analytical Thinking</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Communication</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Adaptability</li>
      <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Teamwork</li>
    </ul>
  </div>


            </div>

        </div>
    )
}

export default Aboutme