import React, { useRef } from 'react'
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import { FaEnvelope, FaLocationDot, FaMapLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';



function Contact() {

    const form = useRef()
    const sendemail = (e) => {
        e.preventDefault();
        // emailjs.sendForm(serviceId,templateId,formvalues,publickey)
        emailjs.sendForm("service_eoa6v47", "template_aq7tqic", form.current, "KM3eyHPFI8vXUysdo").then(() => {

            toast.success("Message sent successfully!!")
            form.current.reset()
        },
            (error) => {
                // alert("Failed to send message,please try again", error.text)
                toast.error("Failed to send message,please try again!!")
            }
        )
    }

    return (
        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className='min-h-screen mt-35' id='contact'>
            {/* heading */}
            <div className='text-center flex flex-col'>
                <h2 className='md:text-3xl text-2xl font-medium text-heading/60'> Reach Out Anytime</h2>
                <p className='mt-2 text-heading/50'>Feel free to drop a message - I'll get back to you promptly</p>
            </div>
            {/* grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-60 mt-12">
                {/* left */}
                <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className='flex flex-col md:items-start items-center md:p-8 mt-10 mb-10 md:mt-15 order-2 md:order-1'>
                    <h2 className='text-xl text-heading/70 my-5 '>Let's Connect</h2>
                    <div className="flex items-center gap-3 text-heading/60 hover:text-heading text-lg transition-colors duration-300">
                        <FaLocationDot className="text-button" size={20} />
                        <span>Al Nasseriya, Sharjah</span>
                    </div>
                    <div className="flex items-center gap-3 text-heading/60 hover:text-heading text-lg transition-colors duration-300 mt-4">
                        <Phone className="text-button" size={20} />
                        <a
                            href="tel:+971509531558"
                        >
                            +971 509531558
                        </a>
                    </div>

                    <a
                        href="mailto:fathimathulraifanp@gmail.com"
                        className="flex items-center gap-3 text-heading/60 hover:text-heading text-lg transition-colors duration-300 mt-4"
                    >
                        <FaEnvelope className="text-button" size={20} />
                        <span>fathimathulraifanp@gmail.com</span>
                    </a>


                    <div className='flex items-center justify-center gap-4 mt-9'>
                        <a href="https://github.com/Raifa509" target="_blank" rel="noopener noreferrer" className='hover:text-button hover:scale-110 transition-all duration-300 text-heading/80'>
                            <Github />
                        </a>

                        <a href='https://www.linkedin.com/in/fathimathulraifa-np/' target='_blank' rel='noopener noreferrer' className='hover:text-button hover:scale-110 transition-all duration-300 text-heading/80'> <Linkedin /></a>

                        <a
                            href="https://wa.me/971509531558"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-button hover:scale-110 transition-all duration-300 text-heading/80"
                        >
                            <FaWhatsapp size={23} />
                        </a>

                    </div>
                </motion.div>

                {/* contact form */}

                <motion.div initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className='flex flex-col border border-button p-8 mt-5 md:mt-15 rounded-2xl order-1 md:order-2'>
                    <h3 className='text-center mt-4 mb-8 text-heading/90 text-lg font-medium'>Drop a message</h3>


                    <form ref={form} onSubmit={sendemail}>

                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="Name"
                            className="w-full rounded-xl px-3 py-2 border border-heading/70 placeholder-heading/50"
                        />
                        <input
                            type="email"
                            name="useremail"
                            required
                            placeholder="Email"
                            className="w-full rounded-xl px-3 py-2 border border-heading/70 mt-5 placeholder-heading/50"
                        />
                        <input
                            type="text"
                            name="subject"
                            required
                            placeholder="Subject"
                            className="w-full rounded-xl px-3 py-2 border border-heading/70 mt-5 placeholder-heading/50"
                        />
                        <textarea
                            name="message"
                            required
                            placeholder="Message"
                            className="w-full rounded-xl px-3 py-2 border border-heading/70 mt-5 placeholder-heading/50"
                        />

                        <Button type='submit' className='w-full rounded-xl cursor-pointer bg-card/50 hover:bg-button/90 hover:text-primary border border-heading/70 hover:border-heading  mt-5 mb-5'>Submit</Button>
                    </form>
                </motion.div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </motion.div>
    )
}

export default Contact