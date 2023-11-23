import React from 'react'

import truelogo from '../assets/truelogo.png'
import me from '../assets/me.jpg'


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
        

      <img className='w-80 rounded-md shadow-2xl    align-middle' src='https://cdn.discordapp.com/attachments/1062017275105906699/1175891349116039279/368314821_1075250270261349_3662192644613691592_n.jpg?ex=656ce128&is=655a6c28&hm=3785b9b37c554f28f1367d6e476314d01c53f37cfc037625dca8a513b3c98836&' />
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
          <button
            
            className="mt-4 hover:underline bg-black-300 text-white font-bold rounded-full py-4 px-8 shadow-2xl"
          >

            <a href='https://github.com/SparrowNado'> Check My GitHub</a>
            
          </button>
         
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;