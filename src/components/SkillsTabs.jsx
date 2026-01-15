import { div } from 'motion/react-client';
import React, { useState } from 'react'
import { RiNextjsFill } from 'react-icons/ri';
import { SiAxios, SiBootstrap, SiCss3, SiElementor, SiExpress, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMongoose, SiMysql, SiNetlify, SiNodedotjs, SiPostman, SiPrisma, SiReact, SiReactrouter, SiRedux, SiRender, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel, SiWordpress } from 'react-icons/si';
import SiMaterialUI from './SiMaterialUi';
import { VscVscode } from 'react-icons/vsc';


function SkillsTabs() {
    const [activeTab, setActiveTab] = useState("frontend")

    const skills = {
        frontend: [
            { title: "React", logo: <SiReact /> },
            { title: "Next.js", logo: <RiNextjsFill /> },
            { title: "TypeScript", logo: <SiTypescript /> },
            { title: "JavaScript (ES6+)", logo: <SiJavascript /> },
            { title: "HTML5", logo: <SiHtml5 /> },
            { title: "Bootstrap", logo: <SiBootstrap /> },
            { title: "CSS3", logo: <SiCss3 /> },
            { title: "Tailwind CSS", logo: <SiTailwindcss /> },
            { title: "Material UI", logo: <SiMaterialUI /> },
            { title: "Shadcn/ui", logo: <SiShadcnui /> },
            { title: "Redux", logo: <SiRedux /> },
            { title: "Axios", logo: <SiAxios /> },
            { title: "React Router", logo: <SiReactrouter /> },
            { title: "Context API", logo: "" },

            // { title: "WordPress", logo: <SiReact /> },
            // { title: "Elementor", logo: <RiNextjsFill /> },
        ],
        backend: [
            { title: "Node.js", logo: <SiNodedotjs /> },
            { title: "Express.js", logo: <SiExpress /> },
            { title: "JWT Authentication", logo: "" },
            { title: "OAuth", logo: "" },
        ],
        database: [
            { title: "MongoDB", logo: <SiMongodb /> },
            { title: "Mongoose", logo: <SiMongoose /> },
            { title: "Prisma", logo: <SiPrisma /> },
            { title: "MySQL", logo: <SiMysql /> },

        ],
        tools: [
            { title: "Git", logo: <SiGit /> },
            { title: "GitHub", logo: <SiGithub /> },
            { title: "Postman", logo: <SiPostman /> },
            { title: "VS Code", logo: <VscVscode /> },
            { title: "Netlify", logo: <SiNetlify /> },
            { title:  "Render", logo: <SiRender /> },
             { title:  "Figma", logo: <SiFigma /> },
        ],
        CMS:[
             { title: "WordPress", logo: <SiWordpress /> },
            { title: "Elementor", logo: <SiElementor /> },
        ]

    }

    const tabs = [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "database", label: "Database" },
        { id: "tools", label: "Tools" },
        { id: "CMS", label: "CMS" }
    ]

    return (
        <div className='flex flex-col items-center'>
            {/* tabs */}
            <div className='flex flex-wrap gap-3 bg-card p-2 rounded-xl mb-10'>
                {
                    tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab == tab.id ? "bg-button text-primary shadow-lg" : "text-heading hover:bg-button/20"}`}>{tab.label}</button>
                    ))
                }
            </div>

            {/* content */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-4xl'>
                {skills[activeTab].map((skill, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-2 p-4 border border-button rounded-xl
            hover:scale-105 hover:bg-button hover:text-primary
            transition-all duration-300'>
                        <span className="text-4xl">{skill.logo}</span>
                        <span className="text-md font-medium text-center">{skill.title}</span>
                    </div>))}
            </div>
        </div>
    )
}

export default SkillsTabs
