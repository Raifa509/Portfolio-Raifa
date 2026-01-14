import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Themetoggle() {
    const [isDark,setDark]=useState(false)
    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme")
        if(storedTheme=="dark"){
            setDark(true)
            document.documentElement.classList.add("dark")
        }
        else{
            localStorage.setItem("theme","light")
            setDark(false)
        }
    },[])
    const toggleTheme=()=>{
        if(isDark)
        {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setDark(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setDark(true)
        }
    }
  return (
    <button onClick={toggleTheme}>{isDark?<Sun className='h-6 w-6 text-yellow-300'/>:<Moon className='h-6 w-6 text-blue-900'/>}</button>
  )
}

export default Themetoggle