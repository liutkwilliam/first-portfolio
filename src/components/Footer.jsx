import React from 'react'
import Logo from './Logo'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialButton from './SocialButton';

function Footer() {
    return (
        <>
            <div className="w-full px-4 py-2 bg-gray-100">
                <footer className="container mx-auto flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-auto text-center md:text-left flex flex-col md:flex-row items-center">
                        <a href="/" className="no-underline md:pr-4">
                            <Logo />
                        </a>
                        <span className="block md:inline-flex py-2">@ {new Date().getFullYear()}, William - Tsz Kin LIU</span>
                    </div>
                    <div className="w-full md:w-auto text-center md:text-right py-2 flex justify-center md:justify-end space-x-4">
                        <SocialButton href="mailto:liutk.william@gmail.com" Icon={<MdOutlineEmail />} ariaLabel="Email William" />
                        <SocialButton href="https://www.instagram.com/liutk.william/" Icon={<FaInstagram />} ariaLabel="William Liu on Instagram" />
                        <SocialButton href="https://www.linkedin.com/in/liutkwilliam/" Icon={<FaLinkedin />} ariaLabel="William Liu on LinkedIn" />
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
