import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('change this to the original bg color');
  const lightsOff = () => {
    setBackgroundColor(backgroundColor === 'bg-blue-500' ? 'bg-green-500' : 'bg-blue-500');
  }

  // Ref for typed text span
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Designer.", "Freelancer."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 2500,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-auto w-screen flex flex-col bg-white dark:bg-[#212121] min-h-screen" id="Home">
        <div className="h-3/4 w-screen flex flex-row mt-12 p-4 items-start justify-start">
          <img
            src="src/assets/me.jpg"
            alt="picture of christian adams"
            className="shadow-solid-pony h-auto w-1/4 dark:shadow-solid-pony flex flex-initial rounded-sm border-double border-driedblossom"
          />

          <div className="flex flex-col p-0 items-center justify-center text-center">

            <div className="flex flex-col ">

            <h1 className="radial-text-gradient dark:text-gradient2 text-8xl">Christian Adams,</h1>
            {/* Typed text */}
            <h1 className='text-gradient dark:bg-gradient-to-b from-cherryblossom via-driedblossom to-cherryblossom dark:animate-gradient-y text-8xl pb-2 self-start'>
              <span ref={typedElement} className=''></span>
            </h1>

            </div> 

            <div className="w-4/5 self-center flex flex-wrap items-center justify-center mt-20 border">
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
