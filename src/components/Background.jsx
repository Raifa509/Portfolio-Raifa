import { motion } from 'motion/react'
import React from 'react'

function Background() {
    return (
        <motion.div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <motion.h1
                animate={{ y: [-20, 20] }} 
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "reverse",
                }}
                className='md:text-[8rem] text-[2.2rem] font-extrabold opacity-10 md:blur-sm blur-xs select-none'
            >
                SOFTWARE DEVELOPER
            </motion.h1>

        </motion.div>
    )
}

export default Background