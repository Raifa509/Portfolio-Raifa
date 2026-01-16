import React from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


function Experience() {
    return (
        <div className='min-h-screen mt-5 md:mx-30 '>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-px md:w-115 w-20 bg-heading opacity-90'></div>
                <h1 className='text-3xl font-bold text-heading'>Experience</h1>
                <div className='h-px md:w-115 w-20 bg-heading opacity-90'></div>
            </div>
            <div className='mx-10 md:mx-30 md:mt-25 mt-15 border border-button/90 p-6 rounded-xl flex flex-col space-y-4'>
                <div className="p-6 rounded-xl bg-card/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                    {/* Left */}
                    <div className="space-y-2">
                        <h3 className="flex items-center gap-2 text-lg font-medium text-heading/90">
                            <FiBriefcase className="text-button" />
                            MERN Stack Developer Intern
                        </h3>

                        <p className="flex items-center gap-2 text-heading/70">
                            <HiOutlineBuildingOffice2 className="text-button" />
                            Luminar Technolab
                        </p>
                    </div>

                    {/* Right */}
                    <div className="space-y-1 text-sm text-heading/70 md:text-right">
                        <p className="flex items-center gap-2 md:justify-end">
                            <FiCalendar className="text-button" />
                            May 2025 – Dec 2025
                        </p>

                        <p className="flex items-center gap-2 md:justify-end">
                            <FiMapPin className="text-button" />
                            Kerala, India
                        </p>
                    </div>

                </div>

                <div className="p-6 rounded-xl bg-card/60">
                    <ul className="list-disc pl-5 space-y-2 text-heading/80 text-sm md:text-base">
                        <li>
                            Developed and deployed full-stack web applications using the
                            <strong> MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>.
                        </li>
                        <li>
                            Designed and implemented secure RESTful APIs with JWT-based authentication, OAuth integration, and role-based access control.
                        </li>
                        <li>
                            Built responsive, reusable user interfaces using
                            <strong> Tailwind CSS, Material UI, and Bootstrap</strong>.
                        </li>
                        <li>
                            Implemented backend business logic following the
                            <strong> MVC architecture</strong> to improve scalability and maintainability.
                        </li>
                        <li>
                            Integrated third-party services and handled secure file uploads using
                            <strong> Multer</strong>.
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Experience