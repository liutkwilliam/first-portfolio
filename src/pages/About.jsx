import React from 'react'
import MarkdownContent from '../components/MarkdownContent';
import SocialButton from '../components/SocialButton';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import useSubtitle from '../hooks/useSubtitle';

function About() {
  useSubtitle({
    title: "About",
    description: "Learn more about William. Discover his creative and coding skills, as well as how to connect with him.",
  });
  const bio = `
## Hi I'm William Liu

Living in Gadigal Country / Sydney, Australia.

I am a Software Engineer and Digital Systems Specialist with background in Computer Science and Media Arts.

I bridge the gap between complex backend logic and refined visual aesthetics. Whether I’m building robust full-stack web applications with React, Node.js, and TypeScript, or managing large-scale digital assets and databases, I focus on delivering clean code, optimal performance, and accessible user experiences.

Let’s build something seamless.

###### Creative Skills

Photography / Video recording / Photoshop / Illustrator / InDesign / Premiere Pro / After Effects / Figma / Fusion 360 / Photo Editing / UI/UX Design

###### Coding Skills

HTML / CSS / Javascript / ReactJS / Python / SQL / Node.js / TypeScript / Git / / Firebase
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
