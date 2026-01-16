import React from 'react'
import SkillsTabs from '../SkillsTabs'
import { motion } from 'framer-motion'

function Skills() {
  return (
         <motion.div  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }} className='min-h-screen mt-5  md:mx-30 ' id='skills'>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-px md:w-115 w-25 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>Skills</h1>
                <div className='h-px md:w-115 w-25 bg-heading opacity-90'></div>

            </div>
            <div className='text-center mt-15 text-heading opacity-25'>
                <h4>Technologies I use to build Modern Web Applications</h4>
            </div>
            
            <div className='mx-10 md:mx-50 mt-15 text-center'>
                <SkillsTabs/>
            </div>
        </motion.div>
  )
}

export default Skills