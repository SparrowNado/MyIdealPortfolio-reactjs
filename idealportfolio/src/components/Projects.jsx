import React from 'react'

import weathervid from  '../assets/weathervid.mp4'
import bmivid from '../assets/bmivid.mp4'
import idealvid from '../assets/idealvid.mp4'
import Favicon from "react-favicon";
import ScrollAnimation from 'react-animate-on-scroll';
<Favicon url={truelogo} />



function Projects() {
  return (
    <ScrollAnimation animateIn="fadeIn">
    <section  id='projects-section'>
    <div className='justify-center text-center font-sans py-11 bg-white text-black w-full h-full drop-shadow-2xl font-bold'>
        <h1 className='text-7xl '>Here Are My Projects!</h1>
        <h2 className='text-4xl mt-4'>Check Them out for yourself</h2>
      </div>
      
    <section className='grid gap-0 md:grid-cols-2 md:items-center md:text-left font-sans  bg-black-300 text-white w-full h-full ' >
      
      
      {/* <div className='justify-center text-center font-sans'> */}
        {/* <h1 className='text-4xl'>Here Are My Projects!</h1>
        <h2>Check Them out for yourself</h2>
      </div> */}
      
      
      {/* Project 1 */}
      <div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
      >
        <source
          src={weathervid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>


      


      <div className='ml-10 mt-4'>
        <h1 className='mb-2  text-4xl font-sans font-medium'>
                    Weather Wizard
        </h1>
        <p className='break-words' >A fundamental javascript project that calls weather information from an API. Taught me how to connect API's</p>
        <div className="flex mb-5   mt-4 md:justify-center">
        <button className=" mt-4  mr-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            
        <a href='https://github.com/SparrowNado/Weather-app-javascript'> Check The Repo</a>
            
            
        </button>
        <button className="mt-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            <a href='https://sparrownado.github.io/Weather-app-javascript/'> Live Demo</a>
            
           
        </button>

        </div>
      </div>


    {/* Project 2 */}
    <div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
      >
        <source
          src={bmivid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>


      


      <div className='ml-10 mt-4'>
        <h1 className='mb-2  text-4xl font-sans font-medium'>
                    VeryHard Fitness
        </h1>
        <p >A Web app that computes your BMI . A project that showcases the DOM side of javascript</p>
        <div className="flex mb-5   mt-4 md:justify-center">
        <button className=" mt-4  mr-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            
        <a href='https://github.com/SparrowNado/BMI-Measurer'> Check The Repo</a>
            
            
        </button>
        <button className="mt-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            <a href='https://sparrownado.github.io/BMI-Measurer/'> Live Demo</a>
            
           
        </button>

        </div>
      </div>



      <div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
      >
        <source
          src={idealvid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>


      

      {/* Project 3 */}
      <div className='ml-10 mt-4'>
        <h1 className='mb-2  text-4xl font-sans font-medium'>
                    Ideal portfolio HTML & CSS
        </h1>
        <p >One of my first attempts of making a more idealized portfolio after my first</p>
        <div className="flex mb-5   mt-4 md:justify-center">
        <button className=" mt-4  mr-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            
        <a href='https://github.com/SparrowNado/myideal-portfolio'> Check The Repo</a>
            
            
        </button>
        <button className="mt-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            <a href='https://sparrownado.github.io/myideal-portfolio/'> Live Demo</a>
            
           
        </button>

        </div>
      </div>


      




    </section>

</section>
</ScrollAnimation>
  )
}

export default Projects
