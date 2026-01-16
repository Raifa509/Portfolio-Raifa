import React from 'react'

function Education() {
    return (
        <div className='mt-5 md:mx-30 mb-20'>
            {/* Heading */}
            <div className='flex items-center justify-center gap-4'>
                <div className='h-px md:w-120 w-20 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>Education</h1>
                <div className='h-px md:w-120 w-20 bg-heading opacity-90'></div>
            </div>

            {/* Education Card */}
            <div className='mx-10 md:mx-30 md:mt-25 mt-15 border border-button/90 p-6 rounded-xl flex flex-col space-y-4'>
                <div className="p-6 rounded-xl bg-card/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    {/* Left side: Degree & University */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold text-heading/95">MERN Stack Web Development </h2>
                        <p className="text-heading/80">Luminar Technolab</p>
                    </div>

                    {/* Right side: Duration & Location */}
                    <div className="flex flex-col gap-1 text-heading/70 md:text-right">
                        <p>May 2025 - July 2025</p>
                        <p>Kerala, India</p>

                    </div>
                </div>
            </div>
            <div className='mx-10 md:mx-30 mt-10 border border-button/90 p-6 rounded-xl flex flex-col space-y-4'>
                <div className="p-6 rounded-xl bg-card/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    {/* Left side: Degree & University */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-semibold text-heading/95">Master of Computer Applications (MCA)</h2>
                        <p className="text-heading/80">APJ Abdul Kalam Technological University</p>
                    </div>

                    {/* Right side: Duration & Location */}
                    <div className="flex flex-col gap-1 text-heading/70 md:text-right">
                        <p>Aug 2023 - May 2025</p>
                        <p>Kerala, India</p>
                        <p>CGPA: 8.92 / 10</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Education