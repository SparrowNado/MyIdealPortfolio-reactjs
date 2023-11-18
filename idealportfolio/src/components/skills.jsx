import React from 'react';


import jsIcon from '../assets/icons/js.svg';
import reactIcon from '../assets/icons/react.svg';
import designIcon from '../assets/icons/design.svg';
import cssIcon from '../assets/icons/css.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import responsiveIcon from '../assets/icons/responsive.svg';
import truelogo from '../assets/truelogo.png'

import Favicon from "react-favicon";
<Favicon url={truelogo} />

const Skills = () => {
  const skills = [
    { name: 'JavaScript', proficiency: 'Intermediate', icon: jsIcon },
    { name: 'React', proficiency: 'Intermediate', icon: reactIcon },
    { name: 'UI/UX Design', proficiency: 'Intermediate', icon: designIcon },
    { name: 'CSS3', proficiency: 'Advanced', icon: cssIcon },
    { name: 'Tailwind CSS', proficiency: 'Intermediate', icon: tailwindIcon },
    { name: 'Responsive Design', proficiency: 'Intermediate', icon: responsiveIcon },
  ];

  return (
    <div  id='skills-section' className=" p-8  shadow-lg font-sans   bg-black-300">



      <h2 className="text-3xl font-bold text-white mb-6 text-center ">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg transition transform hover:scale-105 duration-300 "
          >
            <h3 className="text-xl font-semibold mb-2 text-black-300 ">{skill.name}</h3>
            <p className="text-black-300">{`Proficiency: ${skill.proficiency}`}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;