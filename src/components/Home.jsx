import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import meImage from "../assets/me.jpg";
import petalImage from "../assets/sakura.png"; // Replace with your actual petal image
import sakuraTree from "../assets/sakura-tree.png"; // Replace with your actual petal image

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-white'); // original bg color
  const typedElement = useRef(null);

  const lightsOff = () => {
    setBackgroundColor(prev => prev === 'bg-blue-500' ? 'bg-green-500' : 'bg-blue-500');
  };

  // Typed.js effect
  useEffect(() => {
    const options = {
      strings: ["Developer.", "Designer.", "Freelancer."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 2500,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);
    return () => typed.destroy();
  }, []);

  // Petal animation effect
  useEffect(() => {
    const container = document.getElementById("petal-container");
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
      <div className={`relative h-auto w-screen flex flex-col ${backgroundColor} dark:bg-[#212121] min-h-screen`} id="Home">

        <img src={sakuraTree} className="absolute z-0 opacity-40 w-full h-full" ></img>
        
        {/* 🌸 Petal Background Layer */}
        <div id="petal-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />

        {/* 🌟 Main Content */}
        <div className="relative z-10 h-3/4 w-screen flex flex-row mt-12 p-4 items-start justify-start">
          <img
            src={meImage}
            alt="picture of christian adams"
            className="shadow-solid-pony h-auto w-1/4 dark:shadow-solid-pony flex flex-initial rounded-sm border-double border-driedblossom"
          />

          <div className="flex flex-col p-0 items-center justify-center text-center">
            <div className="flex flex-col">
            <h1 className="text-[#212121] dark:bg-gradient-to-r dark:from-driedblossom dark:via-cherryblossom dark:to-driedblossom dark:bg-clip-text dark:text-transparent text-8xl">
              Christian Adams,
            </h1>

              <h1 className="text-gradient dark:bg-gradient-to-b from-cherryblossom via-driedblossom to-cherryblossom dark:animate-gradient-y text-8xl pb-2 self-start">
                <span ref={typedElement}></span>
              </h1>
            </div>

            <div className="w-4/5 self-center flex flex-wrap items-center justify-center mt-20">
              <h2 className="flex text-center text-white text-xl font-Nunito">
                Curiosity and a passion for clean design fuel my work as a full-stack web developer. 
                With experience in JavaScript, React, Node.js, and MongoDB, 
                I build responsive, user-centered applications and write clean, 
                scalable code that brings ideas to life. 
                I'm always looking to grow as a developer and take on new challenges that push my skills forward.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
