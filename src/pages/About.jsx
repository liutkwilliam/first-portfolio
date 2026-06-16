import React from 'react'
import MarkdownContent from '../components/MarkdownContent';
import SocialButton from '../components/SocialButton';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  const bio = `
## Hi I'm William Liu

Living in Gadigal Country / Sydney, Australia.

A frontend developer, designer and photographer. I have a passion for creating visually appealing and user-friendly websites, as well as capturing moments through my photography.

###### Creative Skills

Photography / Video recording / Photoshop / Illustrator / InDesign / Premiere Pro / After Effects / Figma / Fusion 360

###### Coding Skills

HTML / CSS / Javascript / ReactJS / Python / SQL / Jekyll
  `;

  return (
    <>
      <div className="flex items-center min-h-screen bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-4/5 lg:w-1/2">
              <div className="mb-8">
                <MarkdownContent>{bio}</MarkdownContent>
              </div>
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-2">Follow me</h5>
                <p className="flex items-center mb-2">

                  <SocialButton Icon={<FaInstagram />} />

                  <i className="fa fa-lg fa-instagram text-pink-500"></i>
                  <a
                    href="https://www.instagram.com/liutkwilliam"
                    className="ml-2 text-blue-500 hover:underline"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Instagram (Mainly photography)
                  </a>
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">Contact Me</h5>
                <p className="flex items-center mb-2">
                  <SocialButton Icon={<MdOutlineEmail />} />
                  <a
                    href="mailto:liutk.william@gmail.com"
                    className="ml-2 text-blue-500 hover:underline"
                  >
                    liutk.william (@) gmail.com
                  </a>
                </p>
                <p className="flex items-center mb-2">
                  <SocialButton Icon={<FaLinkedin />} />
                  <a
                    href="https://www.linkedin.com/in/liutkwilliam/"
                    className="ml-2 text-blue-500 hover:underline"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Connect Me on LinkedIn
                  </a>
                </p>
                <p className="flex items-center">
                  <SocialButton Icon={<FaGithub />} />
                  <a
                    href="https://www.github.com/liutkwilliam/"
                    className="ml-2 text-blue-500 hover:underline"
                    target="_blank" rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
