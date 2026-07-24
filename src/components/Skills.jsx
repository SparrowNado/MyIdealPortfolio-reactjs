import React from 'react';

import jsIcon from '../assets/icons/js.svg';
import reactIcon from '../assets/icons/react.svg';
import designIcon from '../assets/icons/design.svg';
import cssIcon from '../assets/icons/css.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import responsiveIcon from '../assets/icons/responsive.svg';

const proficiencyLevels = {
  Beginner: 33,
  Intermediate: 66,
  Advanced: 100,
};

const Skills = () => {
  const skills = [
    { name: 'JavaScript', proficiency: 'Intermediate', icon: jsIcon },
    { name: 'React', proficiency: 'Intermediate', icon: reactIcon },
    { name: 'UI/UX Design', proficiency: 'Intermediate', icon: designIcon },
    { name: 'CSS3', proficiency: 'Advanced', icon: cssIcon },
    { name: 'Tailwind CSS', proficiency: 'Advanced', icon: tailwindIcon },
    { name: 'Responsive Design', proficiency: 'Advanced', icon: responsiveIcon },
  ];

  return (
    <section
      id="skills-section"
      className="relative bg-black-300 py-24 px-7 md:px-10 overflow-hidden"
    >
      {/* Ghost heading */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none pt-8">
        <h2 className="text-[14vw] lg:text-[10vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          SKILLS
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-teal-accent-400 font-mono text-sm tracking-widest uppercase mb-2">
              [ Toolkit ]
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills & Stack
            </h2>
          </div>
          <span className="text-white/30 font-mono text-sm">
            {String(skills.length).padStart(2, '0')} skills
          </span>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group border border-white/10 hover:border-teal-accent-400/50 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 group-hover:bg-teal-accent-400/10 transition-colors duration-300">
                    <img src={skill.icon} alt={`${skill.name} icon`} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-accent-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-white/20 font-mono text-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 font-mono text-xs tracking-widest uppercase">
                  {skill.proficiency}
                </span>
                <span className="text-teal-accent-400 font-mono text-xs">
                  {proficiencyLevels[skill.proficiency]}%
                </span>
              </div>

              <div className="w-full h-[3px] bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-teal-accent-400 transition-all duration-700 ease-out"
                  style={{ width: `${proficiencyLevels[skill.proficiency]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;