import React, { useState, forwardRef } from 'react';
import { Waypoint } from 'react-waypoint';
import Projects from './Projects';

const Skills = forwardRef((_, ref) => {
  const skills = [
    { name: 'Github', icon: 'src/assets/icons/github-sign.png' },
    // Add more skills as needed
  ];

  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
  const [inViewport, setInViewport] = useState(false);

  const handleMouseEnter = (index) => setHoveredSkillIndex(index);
  const handleMouseLeave = () => setHoveredSkillIndex(null);

  // Debugging ref attachment
  console.log("Ref passed to Skills component:", ref);

  return (
    <>
      <div className="font-Righteous bg-white dark:bg-[#212121] overflow-x-hidden h-full flex flex-col">
        <div ref={ref} className="h-48 flex items-center justify-center relative border border-green-500">
          <div className="absolute inset-0 bg-sakura bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50 border-y-4"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-8xl font-bold p-4">My Projects</h1>
            <p className="mt-1 text-2xl">Web Development Projects</p>
          </div>
        </div>

        <Waypoint 
          onEnter={() => setInViewport(true)}
          onLeave={() => setInViewport(false)}
        />

        {/* Ref is attached here */}
        <div className={`grid grid-flow-col grid-cols-4 grid-rows-custom self-center w-4/6 mt-8 p-12 ${inViewport ? "animate-wiggle" : ""}`}>
          <svg className="text-3xl font-extrabold text-center col-start-1 inline-block stroke-white stroke-[0.2px] fill-[#212121]" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="50" className="text-svg">Skill Sets:</text>
          </svg>

          <div className="flex flex-row justify-center bg-[#2a2a2a] bg-center bg-cover row-start-2 row-end-4 col-start-1 col-end-5 rounded-xl mt-4 relative overflow-hidden shadow-[10px_10px_10px_#1c1c1c,-10px_-10px_10px_#262626] border border-driedblossom">
            <div className='p-4 h-fit '>
              {skills.map((skill, index) => (
                <div key={index} className="p-2 h-fit bg-white rounded-lg shadow-md flex flex-col items-center border-none relative overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-4xl font-bold w-8 flex flex-row justify-evenly items-center">
                    <img src={skill.icon} alt={`${skill.name} icon`} className="h-8 w-full" />
                    {hoveredSkillIndex === index && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-sm w-full">
                        {skill.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Projects />
      </div>
    </>
  );
});

export default Skills;
