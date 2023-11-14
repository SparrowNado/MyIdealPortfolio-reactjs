import React from 'react'
import videobg from '../assets/videobg.mp4'

function Hero() {
  return (
    <div className="relative w-screen h-screen text-white overflow-hidden z-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src={videobg}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/*previous py-24  */}
      {/* Content */}
      <div className="relative container mx-auto flex px-12 py-24   align-middle items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            I am 
          </h1>
          <h1 className="my-4 text-5xl font-bold leading-tight">
           Christian Gabriel D. Ramoso
          </h1>
          <p className="text-2xl mb-8">
            An aspiring Front End / Web Developer
          </p>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              View Projects
            </button>
            <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              Plugins
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;