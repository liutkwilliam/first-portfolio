import React from 'react'
import Logo from './Logo'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="w-full p-2 bg-gray-100">
                <footer className="flex flex-wrap justify-between items-center w-full">
                    <div className="w-full md:w-auto text-center md:text-left flex flex-col md:flex-row items-center">
                        <a href="/" className="no-underline md:pr-4">
                            <Logo />
                        </a>
                        <span className="block md:inline-flex py-2">@ {new Date().getFullYear()}, William - Tsz Kin LIU</span>
                    </div>
                    <div className="w-full md:w-auto text-center md:text-right py-2 flex justify-center md:justify-end space-x-4">
                        <a href="mailto:someone@email.com" className="text-xl" target="_blank">
                            <MdOutlineEmail />
                        </a>
                        <a href="https://www.instagram.com/your_instagram/" className="text-xl" target="_blank">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/your_linkedin/" className="text-xl" target="_blank">
                           <FaLinkedin />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
