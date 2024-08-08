import React from 'react'

import truelogo from '../assets/truelogo.png'
import me from '../assets/me.jpg'
import ramoso from '../assets/ramoso.jpg'


import Favicon from "react-favicon";
import videobg2 from "../assets/videobg2.mp4"

<Favicon url={truelogo} />

function Hero() {



  return (

    <div id='hero-section' className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mx-9 min-h-screen  sm:max-h-screen  ">
      <div className='absolute left-0  hidden md:block  lg:hidden sm:hidden   xl:block  '>
      <br>
        </br>
        <br></br><br></br>
        <br></br>
        <br></br>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        

      <img className='w-80 rounded-md shadow-2xl    align-middle' src={ramoso} />
      </div>
    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg
        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z" />
      </svg>
      <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover z-0 sm:rounded-lg  block md:block  sm:block  xl:block  "
    >
      <source
        src={videobg2}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
    <div className='font-sans'>
    <br>
        </br>
        <br></br><br></br>
        <br></br>
        <br></br>

        <br>
        </br>
        
    </div>
        
   
        
      <div className="  mb-16 lg:my-40 lg:max-w-lg lg:pr-5 px-7 content-normal  lg:content-center   ">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          
        </p>
      
        <h2 className='mb-0 font-sans text-3xl font-bold tracking-tight text-white-300 sm:text-4xl sm:leading-none text-left sm:text-center'>
        Hello, it's Me !
        </h2>
        
        <br>
        </br>
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white-300 sm:text-4xl sm:leading-none">
          
         
           Christian Gabriel D. Ramoso
         
        </h2>
        <h3 className="pr-5 mb-5 text-base text-black-300 md:text-lg">
        Aspiring Front End Developer and Web Enthusiast, fueled by a passion for crafting captivating digital experiences. Ready to redefine the web landscape with creativity and code.
        </h3>
        <div className="flex items-center">
          {/* <button
            
            className="mt-4 hover:underline bg-black-300 text-white font-bold rounded-full py-4 px-8 shadow-2xl"
          >

            <a href='https://github.com/SparrowNado'> Check My GitHub</a>
            
          </button>
          */}

<button
        type="button"
        className="text-white bg-black-300 hover:bg-white hover:text-black-300   focus:ring-4 focus:outline-none focus:ring-gray-500 focus:border-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-gray-700 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        <a href='https://github.com/SparrowNado'>Check My GitHub</a>
    
      </button>
          

        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;