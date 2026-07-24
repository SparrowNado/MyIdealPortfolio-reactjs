import React from 'react';

const Experience = () => {
  const experience = [
    {
      number: '01',
      role: 'Web Developer',
      company: 'Connettiq Marketing Solutions',
      period: 'October 2024 — Present',
      current: true,
      description:
        'Designed responsive front-end interfaces, developed custom GoHighLevel solutions and automations, created business-specific plugins and scripts, and collaborated with clients to deliver tailored digital marketing and lead management solutions.',
      tags: ['GoHighLevel', 'Automation', 'Client Work'],
    },
    {
      number: '02',
      role: 'Software Engineer Intern (Front End)',
      company: 'HOOLI Software',
      period: 'December 2023 — February 2024',
      current: false,
      description:
        'Developed user-facing frontend components, fixed frontend bugs, and collaborated with code reviewers and QA teams to identify, address, and improve software quality.',
      tags: ['React', 'QA', 'Code Review'],
    },
  ];

  return (
    <section
      id="experience-section"
      className="relative bg-black-300 py-24 px-7 md:px-10 overflow-hidden"
    >
      {/* Ghost heading */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none pt-8">
        <h2 className="text-[14vw] lg:text-[10vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          WORK
        </h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-teal-accent-400 font-mono text-sm tracking-widest uppercase mb-2">
              [ Career ]
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Experience
            </h2>
          </div>
          <span className="text-white/30 font-mono text-sm">
            {String(experience.length).padStart(2, '0')} roles
          </span>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10">
          {experience.map((job) => (
            <div key={job.number} className="relative mb-16 last:mb-0 group">
              {/* Node */}
              <span
                className={`absolute -left-[41px] top-1 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                  job.current
                    ? 'bg-teal-accent-400 border-teal-accent-400'
                    : 'bg-black-300 border-white/30 group-hover:border-teal-accent-400'
                }`}
              />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-white/20 font-mono text-sm">{job.number}</span>
                <p className="text-white/40 font-mono text-xs tracking-widest uppercase">
                  {job.period}
                </p>
                {job.current && (
                  <span className="flex items-center gap-1.5 text-teal-accent-400 font-mono text-xs tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-accent-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-teal-accent-400 transition-colors duration-300">
                {job.role}
              </h3>
              <h4 className="text-lg font-medium text-white/50 mb-4">{job.company}</h4>
              <p className="text-white/60 max-w-2xl mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono tracking-wider text-teal-accent-400 border border-teal-accent-400/30 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;