import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import React from 'react';
import Themetoggle from './Themetoggle';
import { Link } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"



function Navbar() {
    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
        fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50
        bg-card/30 dark:bg-card/50 backdrop-blur-md
        border border-card/40 dark:border-card/60
        rounded-2xl p-4
        flex items-center justify-between
      "
        >
            <div className="flex items-center gap-4 text-heading">
                <a href="https://github.com/Raifa509" target="_blank" rel="noopener noreferrer" className='hover:text-button hover:scale-110 transition-all duration-300'>
                    <Github />
                </a>

                <a href='https://www.linkedin.com/in/fathimathulraifa-np/' target='_blank' rel='noopener noreferrer' className='hover:text-button hover:scale-110 transition-all duration-300'> <Linkedin /></a>
                <a href="mailto:fathimathulraifanp@gmail.com" className='hover:text-button hover:scale-110 transition-all duration-300'>
                    <Mail />
                </a>
            </div>
            <div>
                <ul className='md:flex hidden items-center md:gap-4 gap-2'>
                    <a href='#home'>
                        <li className='cursor-pointer hover:text-button hover:scale-110 transition-all duration-300'>
                            Home
                        </li>
                    </a>

                    <a href='#skills'>
                        <li className='cursor-pointer hover:text-button hover:scale-110 transition-all duration-300'>
                            Skills
                        </li>
                    </a>
                    <a href='#projects'>
                        <li className='cursor-pointer hover:text-button hover:scale-110 transition-all duration-300'>
                            Projects
                        </li>
                    </a>
                    <a href='#contact'>
                        <li className='cursor-pointer hover:text-button hover:scale-110 transition-all duration-300'>
                            Contact
                        </li>
                    </a>
                </ul>
            </div>



            <div className='flex gap-4'>
                <div className='md:hidden flex'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <a href="#home">Home</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="#skills">Skills</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="#projects">Projects</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <a href="#contact">Contact</a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <Themetoggle />
            </div>
        </motion.div>
    );
}

export default Navbar;
