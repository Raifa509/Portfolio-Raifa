import React from 'react'
import SplitText from '../SplitText';
import TextType from '../TextType';
import { Button } from "@/components/ui/button"
import Background from '../Background';



function LandingPage() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

        <div className='relative h-screen'>
            <Background />

            <div className='flex flex-col md:grid grid-cols-2 items-center justify-center h-screen md:mx-30 relative z-10'>
                <div className='flex flex-col md:items-start justify-center  mt-15 md:mt-0'>
                    <div className='flex items-center justify-center gap-3 py-6'>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-button opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-button"></span>
                        </span>
                        <p className='text-heading'>Available Immediatley</p>
                    </div>
                    <SplitText
                        text="Hi, I'm Fathimathul Raifa"
                        className="md:text-4xl text-heading text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />


                    <TextType
                        text={["Full Stack Developer", "Frontend Developer", "Backend Developer"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='mt-5 md:text-2xl text-xl text-heading'
                    />

                    {/* buttons */}
                    <div className='mt-10 flex md:flex-row flex-col items-center justify-center gap-4'>
                        <a href='./Fathimathul Raifa_resume.pdf' target="_blank"
                            rel="noopener noreferrer">
                            <Button variant="outline" className='bg-button border-transparent cursor-pointer text-primary transition-all duration-300
            hover:shadow-[0_0_30px_rgba(45,212,191,0.8)]'>Download Resume</Button>
                        </a>
                        <a href=""><Button className='border border-button hover:text-primary hover:bg-button hover:border-transparent cursor-pointer transition-all duration-300
            '>Explore Projects</Button></a>
                    </div>
                </div>

                {/* image div */}
                <div className="flex mt-15 md:mt-0 items-center justify-center">
                    <div className="relative group">

                        {/* Outer frame */}
                        <div className="h-72 w-72 border-t-4 border-l-4 border-button rounded-tl-3xl"></div>

                        {/* Image */}
                        <img
                            src="/Photo.png"
                            alt="Profile"
                            onContextMenu={(e) => e.preventDefault()}
                            className="
                            h-70 w-70
                            object-cover
                            rounded-2xl
                            absolute
                            top-4 left-5
                            bg-primary
                            shadow-xl
                            border-4 
                            border-button
                            transition-all duration-500
            
          "
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LandingPage