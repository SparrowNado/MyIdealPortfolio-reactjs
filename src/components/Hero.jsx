import React from 'react'

import truelogo from '../assets/truelogo.png'
import background from '../assets/background.jpg'

import Favicon from "react-favicon";

<Favicon url={truelogo} />

function Hero() {



  return (
    <div
    id="hero-section"
    className="relative w-screen h-screen text-white overflow-hidden z-0 bg-black-300"

  >
        

<Favicon url={truelogo} />

    

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/*previous py-24  */}
      {/* Content */}
      <div className="relative container mx-auto flex px-12 py-48 text-white   align-middle items-center justify-center flex-col ">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-7xl font-bold leading-tight">
            I am 
          </h1>
          <h1 className="my-4  text-6xl font-bold leading-tight  ">
           Gabriel D. Ramoso
          </h1>
          <h2 className="text-3xl mb-8 font-bold">
            An aspiring Front End / Web Developer
          </h2>
          <p className="text-2xl mb-8 font-bold">
            Working hard everyday to get better at my craft
          </p>
      
          <div className="flex justify-center mx-auto">
            
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8  transform hover:scale-125 duration-300 no-underline">
              <a href='https://github.com/SparrowNado'>
                Check My Github
              </a>
              
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;