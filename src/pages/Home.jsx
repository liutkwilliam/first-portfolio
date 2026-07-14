import React from 'react'
import CoverImage from '/images/portfolio-cover.jpg'
import Button from '../components/Button'

function Home() {
  return (
    <>
      <div className="min-h-[90vh] w-full flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-[90vh] flex items-center justify-center">
          <img
            src={CoverImage}
            alt="homepage cover photo"
            className="absolute inset-0 w-full h-[90vh] object-cover z-0"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-70 flex items-center justify-center z-10" />
          <div className="absolute insert-0 z-20 text-center text-white">
            <p className="text-lg font-semibold mb-2">G'Day / Hello, My name is: </p>
            <p className="text-4xl md:text-6xl font-bold mb-4">William Liu</p>
            <p className="text-lg md:text-xl mb-8">
              A Frontend Developer, Designer and Photographer.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size='lg' href={"/developer"} content={"View my Developer Portfolio"} />
              <Button size='lg' variant='secondary' href={"/portfolio"} content={"View my Design Portfolio"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
