import React from 'react'

import truelogo from '../assets/truelogo.png'


import Favicon from "react-favicon";
import videobg2 from "../assets/videobg2.mp4"

<Favicon url={truelogo} />

function Hero() {



  return (
    <div
    id="hero-section"
    className="relative w-screen h-screen text-white overflow-hidden z-0 bg-black-300"
  >

        <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
      >
        <source
          src={videobg2}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> 

    <Favicon url={truelogo} />
  
    {/* Content Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
    {/* Content */}
    <div className="relative container mx-auto flex px-4 sm:px-8 py-16 sm:py-32 text-white sm:text-base align-middle items-center justify-center flex-col">
      <div className="text-center lg:w-5/12 w-full">
        <h1 className="my-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          I am
        </h1>
        <h1 className="my-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug">
          Gabriel D. Ramoso
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 lg:mb-8 font-bold">
          An aspiring Front End / Web Developer
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 lg:mb-8 font-bold">
          Working hard every day to get better at my craft
        </p>
  
        <div className="flex justify-center mx-auto">
          <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-3 px-6 sm:py-4 sm:px-8 transform hover:scale-105 duration-300 no-underline">
            <a href="https://github.com/SparrowNado">Check My Github</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;