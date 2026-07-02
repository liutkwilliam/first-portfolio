import React from 'react'
import ButtonLink from '../components/ButtonLink'
import CoverImage from '/images/portfolio-cover.jpg'

function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-[100vh] flex items-center justify-center">
          <img
            src={CoverImage}
            alt="homepage cover photo"
            className="absolute inset-0 w-full h-[100vh] object-cover z-0"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-70 flex items-center justify-center z-10" />
          <div className="absolute insert-0 z-20 text-center text-white">
            <p className="text-4xl md:text-6xl font-bold mb-4">William Liu</p>
            <p className="text-lg md:text-xl mb-8">
              Frontend Developer | Designer
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <ButtonLink href={"/portfolio"} content={"Design Portfolio"} />
              <ButtonLink href={"/developer"} content={"Developer Portfolio"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
