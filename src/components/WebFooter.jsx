import React from 'react';
import { Link } from 'react-scroll';

function WebFooter() {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', link: 'hero-section' },
    { name: 'Projects', link: 'projects-section' },
    { name: 'Experience', link: 'experience-section' },
    { name: 'Skills', link: 'skills-section' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SparrowNado' },
    { name: 'Portfolio', url: 'https://gabrielramoso-portfoliojs.netlify.app/' },
  ];

  return (
    <footer className="relative bg-black-300 border-t border-white/10 pt-16 pb-8 px-7 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-mono font-bold text-2xl text-white tracking-widest">
              CGDR<span className="text-teal-accent-400">.</span>
            </span>
            <p className="text-white/50 mt-3 max-w-xs">
              Front End Developer crafting clean, purposeful digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-teal-accent-400 font-mono text-xs tracking-widest uppercase mb-4">
              [ Navigate ]
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-white/60 hover:text-teal-accent-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="text-teal-accent-400 font-mono text-xs tracking-widest uppercase mb-4">
              [ Connect ]
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-teal-accent-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/40 text-sm font-mono">
            © {year} Christian Gabriel D. Ramoso. All rights reserved.
          </span>
          <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
            Built with React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

export default WebFooter;