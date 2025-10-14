import React, { useState, useEffect, forwardRef } from 'react';
import Projects from './Projects';
import sakura from '../assets/sakura.avif';

// Icons
import github from '../assets/icons/github.png';
import js from '../assets/icons/js.png';
import tailwind from '../assets/icons/icons8-tailwind-css-100.png';
import mongoose from '../assets/icons/mongodb.webp';
import nodejs from '../assets/icons/nodejs.png';
import react from '../assets/icons/react.png';
import html from '../assets/icons/html.png';
import git from '../assets/icons/social.png';
import css from '../assets/icons/css-3.png';
import vite from '../assets/icons/icons8-vite-512.png';
import express from '../assets/icons/express-js.png';
import petalImage from '../assets/sakura.png';

const Skills = forwardRef((_, ref) => {
  const skills = [
    { name: 'Github', icon: github },
    { name: 'JavaScript', icon: js },
    { name: 'Tailwind', icon: tailwind },
    { name: 'Mongoose', icon: mongoose },
    { name: 'NodeJs', icon: nodejs },
    { name: 'React', icon: react },
    { name: 'HTML5', icon: html },
    { name: 'Git', icon: git },
    { name: 'CSS', icon: css },
    { name: 'Vite', icon: vite },
    { name: 'Express', icon: express },
  ];

  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
  const handleMouseEnter = (index) => setHoveredSkillIndex(index);
  const handleMouseLeave = () => setHoveredSkillIndex(null);

  useEffect(() => {
    const container = document.getElementById("skills-petal-container");
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const petal = document.createElement("img");
      petal.src = petalImage;
      petal.className = "absolute w-6 h-6 pointer-events-none animate-fall";
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.top = `${Math.random() * -100}vh`;
      petal.style.animationDuration = `${5 + Math.random() * 5}s`;
      petal.style.opacity = Math.random();

      container.appendChild(petal);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style>
        {` 
    @keyframes fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(150vh) rotate(360deg);
        opacity: 0;
      }
    }
    .animate-fall {
      animation-name: fall;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
        `}
      </style>

      <div className="font-Righteous bg-white dark:bg-[#212121] overflow-x-hidden h-full flex flex-col relative">
        {/* 🌸 Petal Background Layer */}
        <div id="skills-petal-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />

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

        {/* Skills Section */}
        <div className='grid grid-flow-col grid-cols-4 auto-rows-min self-center w-4/6 p-12'>
          <svg className="text-3xl font-extrabold text-center col-start-1 block stroke-white stroke-[0.2px] fill-[#212121] -mb-24" xmlns="http://www.w3.org/2000/svg" viewBox=''>
            <text x="50" y="50" className="text-svg">Skill Sets:</text>
          </svg>

          <div
            className="flex flex-row row-start-2 row-end-4 col-start-1 col-end-5 rounded-xl mt-4 relative overflow-hidden shadow-[10px_10px_10px_#1c1c1c,-10px_-10px_10px_#262626] border border-driedblossom bg-[#212121] justify-between gap-2 flex-wrap p-2 h-auto"
          >
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
