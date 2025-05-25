import React, { useState, forwardRef } from 'react';
import { Waypoint } from 'react-waypoint';
import Projects from './Projects';
import sakura from '../assets/sakura.avif';  // <-- Import sakura image here

const Skills = forwardRef((_, ref) => {
  const skills = [
    { name: 'Github', icon: 'src/assets/icons/github.png' },
    { name: 'JavaScript', icon: 'src/assets/icons/js.png' },
    { name: 'Tailwind', icon: 'src/assets/icons/icons8-tailwind-css-100.png' },
    { name: 'Mongoose', icon: 'src/assets/icons/mongodb.webp' },
    { name: 'NodeJs', icon: 'src/assets/icons/nodejs.png' },
    { name: 'React', icon: 'src/assets/icons/react.png' },
    { name: 'HTML5', icon: 'src/assets/icons/html.png' },
    { name: 'Git', icon: 'src/assets/icons/social.png' },
    { name: 'CSS', icon: 'src/assets/icons/css-3.png' },
    { name: 'Vite', icon: 'src/assets/icons/icons8-vite-512.png' },
    { name: 'Express', icon: 'src/assets/icons/express-js.png' },
  ];

  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredSkillIndex(index);
  const handleMouseLeave = () => setHoveredSkillIndex(null);

  return (
    <>
      <div className="font-Righteous bg-white dark:bg-[#212121] overflow-x-hidden h-full flex flex-col">
        {/* Top Header with sakura background */}
        <div
          ref={ref}
          className="h-48 flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${sakura})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 border-y-4"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-8xl font-bold p-4">My Projects</h1>
            <p className="mt-1 text-2xl">Web Development Projects</p>
          </div>
        </div>

        {/* Skills Section (no background image) */}
        <div className='grid grid-flow-col grid-cols-4 auto-rows-min self-center w-4/6 p-12'>
          <svg className="text-3xl font-extrabold text-center col-start-1 block stroke-white stroke-[0.2px] fill-[#212121] -mb-24" xmlns="http://www.w3.org/2000/svg" viewBox=''>
            <text x="50" y="50" className="text-svg">Skill Sets:</text>
          </svg>

          <div
            className="flex flex-row row-start-2 row-end-4 col-start-1 col-end-5 rounded-xl mt-4 relative overflow-hidden shadow-[10px_10px_10px_#1c1c1c,-10px_-10px_10px_#262626] border border-driedblossom bg-[#212121] justify-between gap-2 flex-wrap p-2 h-auto"
          >
            {/* Overlay for semi-transparent effect */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none rounded-xl"></div>

            {skills.map((skill, index) => {
              const nameLength = skill.name.length;
              const fontSize = `${Math.max(10, 60 / nameLength)}px`;

              return (
                <div
                  key={index}
                  className="relative z-10 text-4xl font-bold h-14 flex justify-center items-center aspect-square overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={skill.icon} alt={`${skill.name} icon`} className="h-full w-auto" />
                  {hoveredSkillIndex === index && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-75 text-white text-center text-[12px] text-wrap flex items-center justify-center rounded-b-md"
                      style={{ fontSize }}
                    >
                      {skill.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Projects />
      </div>
    </>
  );
});

export default Skills;
