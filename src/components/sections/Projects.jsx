import React from 'react'
import { Badge } from "@/components/ui/badge"
import { SiGithub } from 'react-icons/si'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from 'framer-motion'

function Projects() {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className='min-h-screen md:mt-10 mt-25  md:mx-30 mx-2' id='projects'>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-px md:w-115 w-25 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>Projects</h1>
                <div className='h-px md:w-115 w-25 bg-heading opacity-90'></div>

            </div>
            {/* homeserve */}
            <div className='grid md:grid-cols-4 grid-cols-2 md:mx-30 mt-25 gap-2 md:gap-4'>
                {/* image */}
                <motion.div  transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -6 }}  className='col-span-2 w-full rounded-4xl bg-card/60 flex items-center justify-center'>
                    <img src="/home.png" alt="" />
                </motion.div>
                {/* content */}
                <div className='border border-card p-6 w-full col-span-2 rounded-2xl bg-card/60 hover:border-button transition-all duration-300'>
                    <div className='flex items-center justify-end mb-6 '>
                        <Tooltip>
                            <a
                                href="https://github.com/Raifa509/HomeServe-MERN-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TooltipTrigger><SiGithub size={18} className='cursor-pointer' /></TooltipTrigger>

                                <TooltipContent>
                                    <p>Source Code</p>
                                </TooltipContent>
                            </a>
                        </Tooltip>
                    </div>
                    <h2 className='text-xl font-medium text-heading/90'>HomeServe - Home services Platform</h2>
                    <div className='h-0.5  w-45 bg-heading opacity-90 mt-2'></div>
                    <p className='mt-7 text-justify  text-heading/80'>HomeServe is a MERN-based home services platform with secure JWT authentication, role-based access, and an AI chatbot for automatic user query responses, along with a dynamic admin dashboard.</p>
                    <div className='mt-6 flex gap-2 flex-wrap  text-heading/80'>

                        <Badge variant="default" className='border border-button/80 px-3 py-1'>React.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Node.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Express.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>MongoDB</Badge>
                    </div>
                </div>
            </div>


            {/* Bookstore */}
            <div className='grid md:grid-cols-4 grid-cols-2 md:mx-30 mt-15 gap-4'>
                {/* content */}
                <div className='border border-card p-6 w-full col-span-2 rounded-2xl bg-card/60 hover:border-button transition-all duration-300 order-2 md:order-1'>
                    <div className='flex items-center justify-end mb-6 '>
                        <Tooltip>
                            <a
                                href="https://github.com/Raifa509/BookStore-MERN-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TooltipTrigger><SiGithub size={18} className='cursor-pointer' /></TooltipTrigger>

                                <TooltipContent>
                                    <p>Source Code</p>
                                </TooltipContent>
                            </a>
                        </Tooltip>
                    </div>
                    <h2 className='text-xl font-medium text-heading/90'>BookStore – Used Books E-commerce Platform</h2>
                    <div className='h-0.5  w-45 bg-heading opacity-90 mt-2'></div>
                    <p className='mt-7 text-justify text-heading opacity-80'>
                        A full-stack used bookstore platform enabling users to buy and sell books with secure authentication, Stripe-powered payments, admin approval workflows, image uploads via Multer, and complete CRUD functionality.
                    </p>

                    <div className='mt-6 flex gap-2 flex-wrap text-heading/80'>

                        <Badge variant="default" className='border border-button/80 px-3 py-1'>React.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Node.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Express.js</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>MongoDB</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Stripe</Badge>
                    </div>
                </div>
                {/* image */}
                <motion.div transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -6 }} className='col-span-2 w-full rounded-4xl bg-card/60 flex items-center justify-center order-1 md:order-2'>
                    <img src="/bookstore.png" alt="" />
                </motion.div>

            </div>

            {/* Netflix */}
            <div className='grid md:grid-cols-4 grid-cols-2 md:mx-30 mt-15 gap-4'>
                {/* image */}
                <motion.div transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -6 }} className='col-span-2 w-full rounded-4xl bg-card/60 flex items-center justify-center'>
                    <img src="/netflix.png" alt="" />
                </motion.div>
                {/* content */}
                <div className='border border-card p-6 w-full col-span-2 rounded-2xl bg-card/60 hover:border-button transition-all duration-300'>
                    <div className='flex items-center justify-end mb-6 '>
                        <Tooltip>
                            <a
                                href="https://github.com/Raifa509/Netflix-UI-Clone"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TooltipTrigger><SiGithub size={18} className='cursor-pointer' /></TooltipTrigger>

                                <TooltipContent>
                                    <p>Source Code</p>
                                </TooltipContent>
                            </a>
                        </Tooltip>
                    </div>
                    <h2 className='text-xl font-medium text-heading/90'>Netflix UI Clone</h2>
                    <div className='h-0.5  w-30 bg-heading opacity-90 mt-2'></div>
                    <p className='mt-7 text-justify text-heading opacity-80'>
                        A Netflix UI clone developed using HTML and Tailwind CSS, featuring a responsive layout, modern styling, and accurately recreated UI components inspired by the original platform.
                    </p>


                    <div className='mt-4 flex gap-2 flex-wrap text-heading/80'>

                        <Badge variant="default" className='border border-button/80  px-3 py-1'>HTML5</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>Tailwind CSS</Badge>
                        <Badge variant="default" className='border border-button/80 px-3 py-1'>CSS</Badge>
                    </div>
                </div>


            </div>

            <div className='flex items-center md:justify-center text-center my-30 '>
                <p className="text-heading/50">
                    More projects coming soon. View all projects on{" "}
                    <a
                        href="https://github.com/Raifa509"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-button/70 hover:text-button/90"
                    >
                        GitHub
                    </a>.
                </p>

            </div>
        </motion.div>
    )
}

export default Projects