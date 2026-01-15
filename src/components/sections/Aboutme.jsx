import React from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiWordpress,
  SiMongodb,
  SiExpress,
  SiNodedotjs
} from "react-icons/si";

import LogoLoop from '../LogoLoop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
];



function Aboutme() {
    return (
        <div className='min-h-screen mt-5  md:mx-30 '>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-0.25 md:w-110 w-25 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>About ME</h1>
                <div className='h-0.25 md:w-110 w-25 bg-heading opacity-90'></div>

            </div>
            <div className='md:mt-25 mt-15 mx-10 md:mx-50 text-heading opacity-90'>
                <p className="text-lg mb-6 text-justify text-heading opacity-90">
                    Hi! I’m Fathimathul Raifa, an MCA graduate and MERN Stack Developer. I build fullstack web applications, craft responsive user interfaces, and enjoy turning ideas into practical digital solutions. I’m always learning new technologies to create impactful experiences.
                </p>
                <div>
                    <h3 className="text-2xl font-semibold mb-5 mt-10 text-heading opacity-90">What I Can Do</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">MERN Stack Development</li>
                        <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Frontend Development (React , Next.js)</li>
                        <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">Backend Logic & APIs</li>
                        <li className="px-3 py-1 border border-button rounded-md hover:scale-105 transition-all duration-300">WordPress Website Development</li>
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


                {/* logo loop */}

                <div style={{ height: '130px', position: 'relative', overflow: 'hidden' }} className='mt-25 opacity-15'>
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                       
                    />



                </div>


            </div>

        </div>
    )
}

export default Aboutme