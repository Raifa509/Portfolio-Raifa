import React from 'react'
import SkillsTabs from '../SkillsTabs'

function Skills() {
  return (
         <div className='min-h-screen mt-5  md:mx-30 '>
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
        </div>
  )
}

export default Skills