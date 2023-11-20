import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbartop = () => {
  let Links = [
    { name: 'Home', link: 'hero-section' }, 
    { name: 'Projects', link: 'projects-section' },
    { name: 'Skills', link: 'skills-section' },
   
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-30 border-b-4   border-black-300 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-black-300  ">
          <span>CGDR</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white rounded-lg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80} // Adjust this offset based on your layout
                className="text-black hover:text-blue-400 duration-500 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbartop;
