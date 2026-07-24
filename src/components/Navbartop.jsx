import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbartop = () => {
  const Links = [
    { name: 'Home', link: 'hero-section' },
    { name: 'Projects', link: 'projects-section' },
    { name: 'Experience', link: 'experience-section' },
    { name: 'Skills', link: 'skills-section' },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero-section');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-black-300/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between py-5 md:px-10 px-7 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="https://gabrielramoso-portfoliojs.netlify.app/"
          className="font-mono font-bold text-xl text-white tracking-widest hover:text-teal-accent-400 transition-colors duration-300"
        >
          CGDR<span className="text-teal-accent-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {Links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActive(item.link)}
                className={`relative font-mono text-sm tracking-wider uppercase cursor-pointer transition-colors duration-300 pb-1 ${
                  active === item.link
                    ? 'text-teal-accent-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                {active === item.link && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-teal-accent-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer w-7 h-7 text-white z-40"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black-300 border-l border-white/10 flex flex-col justify-center px-10 gap-8 transition-transform duration-500 ease-in-out z-30 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {Links.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={() => setOpen(false)}
            onSetActive={() => setActive(item.link)}
            className={`font-mono text-lg tracking-wider uppercase cursor-pointer transition-colors duration-300 ${
              active === item.link ? 'text-teal-accent-400' : 'text-white/70 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Overlay behind mobile menu */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black-300/60 backdrop-blur-sm z-20"
        />
      )}
    </div>
  );
};

export default Navbartop;