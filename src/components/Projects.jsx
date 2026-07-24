import React from 'react';
import weathervid from '../assets/weathervid.mp4';
import crypto from '../assets/crypto.mp4';
import idealvid from '../assets/idealvid.mp4';

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Weather Wizard',
      description:
        "A fundamental JavaScript project that calls weather information from an API. Taught me how to connect APIs.",
      video: weathervid,
      tags: ['JavaScript', 'API'],
      repo: 'https://github.com/SparrowNado/Weather-app-javascript',
      demo: 'https://sparrownado.github.io/Weather-app-javascript/',
    },
    {
      number: '02',
      title: 'CryptoHunters',
      description:
        'A web app that tracks crypto prices through an API. Made with HTML, CSS, and PHP (requires XAMPP).',
      video: crypto,
      tags: ['HTML', 'CSS', 'PHP'],
      repo: 'https://github.com/SparrowNado/Cryptohunters-HTML-CSS-Version',
      demo: 'https://sparrownado.github.io/Cryptohunters-HTML-CSS-Version/',
    },
    {
      number: '03',
      title: 'Ideal Portfolio',
      description:
        'One of my first attempts at making a more idealized portfolio, built with HTML and CSS.',
      video: idealvid,
      tags: ['HTML', 'CSS'],
      repo: 'https://github.com/SparrowNado/myideal-portfolio',
      demo: 'https://sparrownado.github.io/myideal-portfolio/',
    },
  ];

  return (
    <section id="projects-section" className="relative bg-black-300 py-24 px-7 md:px-10 overflow-hidden">
      {/* Ghost heading, matches Hero treatment */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none pt-8">
        <h2 className="text-[14vw] lg:text-[10vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          WORK
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-teal-accent-400 font-mono text-sm tracking-widest uppercase mb-2">
              [ Portfolio ]
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Recent Projects
            </h2>
          </div>
          <span className="text-white/30 font-mono text-sm">
            {String(projects.length).padStart(2, '0')} projects
          </span>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid md:grid-cols-[auto_1fr_auto] items-center gap-8 border border-white/10 hover:border-teal-accent-400/50 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6 md:p-8"
            >
              {/* Video thumbnail */}
              <div className="relative w-full md:w-56 aspect-video overflow-hidden flex-shrink-0 order-1">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="absolute top-2 left-2 text-white/60 font-mono text-xs bg-black-300/70 px-2 py-1">
                  {project.number}
                </span>
              </div>

              {/* Info */}
              <div className="order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-teal-accent-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4 max-w-xl">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono tracking-wider text-teal-accent-400 border border-teal-accent-400/30 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex md:flex-col gap-3 order-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center whitespace-nowrap text-white border border-white/20 hover:border-teal-accent-400 hover:text-teal-accent-400 font-semibold text-sm px-5 py-2.5 transition-colors duration-300"
                >
                  Repo
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center whitespace-nowrap bg-teal-accent-400 text-black-300 font-bold text-sm px-5 py-2.5 hover:bg-teal-accent-500 transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;