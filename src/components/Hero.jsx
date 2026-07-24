import React from 'react';
import ramoso from '../assets/ramoso.jpg';
import videobg2 from '../assets/videobg2.mp4';

function Hero() {
  return (
    <div
      id="hero-section"
      className="relative min-h-screen w-full bg-black-300 overflow-hidden"
    >

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[18vw] lg:text-[14vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          RAMOSO
        </h1>
      </div>

      {/* Accent grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-10 min-h-screen flex flex-col justify-center py-24">
        {/* Top row: eyebrow + status */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <span className="text-white/40 text-sm font-mono tracking-widest uppercase">
            Portfolio / 2026
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-accent-400 animate-pulse" />
            {/* <span className="text-white-accent-400 text-sm font-mono tracking-widest uppercase">
              Available for work
            </span> */}
          </div>
        </div>

        {/* Main content: text + photo card side by side */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-teal-accent-400 font-mono text-lg mb-3">Hi, my name is</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-3">
              Christian Gabriel
            </h2>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/30 leading-[1.05] mb-8">
              D. Ramoso
            </h2>
            <p className="text-white/60 text-lg max-w-xl mb-10 border-l-2 border-teal-accent-400 pl-5">
              Aspiring Front End Developer and Web Enthusiast, fueled by a
              passion for crafting captivating digital experiences. Ready to
              redefine the web landscape with creativity and code.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/SparrowNado"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-teal-accent-400 text-black-300 font-bold rounded-none px-7 py-4 transition-all duration-300 hover:pr-9"
              >
                <svg
                  className="w-5 h-5"
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
                GitHub
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#projects-section"
                className="flex items-center gap-2 text-white font-semibold px-7 py-4 border border-white/20 hover:border-teal-accent-400 hover:text-teal-accent-400 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Floating photo card with video peeking behind it */}
          <div className="relative flex-shrink-0 hidden sm:block">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-teal-accent-400/50" />
            <div className="relative w-64 lg:w-72 aspect-[3/4] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
              >
                <source src={videobg2} type="video/mp4" />
              </video>
              <img
                className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src={ramoso}
                alt="Christian Gabriel D. Ramoso"
              />
            </div>
            <span className="absolute -bottom-4 right-0 text-teal-accent-400 font-mono text-xs tracking-widest">
              [ hover to preview ]
            </span>
          </div>
        </div>

   
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2 text-white/30 text-sm font-mono tracking-wider">
          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>TAILWIND CSS</span>
          <span>UI / UX</span>
          <span>CMS</span>
          <span>RESPONSIVE DESIGN</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;