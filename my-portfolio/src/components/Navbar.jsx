import { ScaleIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';

const Navbar = ({ targetRef }) => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Observed entry:", entry);
        // Set isSticky to false when the target is intersecting
        setIsSticky(entry.isIntersecting); // Change this to match your logic
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0, // Change to 1.0 for full visibility
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <nav className='relative w-full dark:bg-[#212121] z-[100] shadow-light-below'>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center ml-8">
          <img src="src/assets/flower.png" alt="" className='size-8 transition-transform duration-300 hover:rotate-180'/>
        </div>

        <div className="lg:mr-64 h-full flex flex-row flex-auto justify-end items-center space-x-8">
          <a href='https://www.linkedin.com/in/christian-j-adams/' target="_blank" rel="noopener noreferrer" className="dark:text-white h-6 w-auto mx-2 border-l border-l-driedblossom pl-8 transition duration-500 hover:text-ponypink dark:hover:text-driedblossom select-none">
            LinkedIn
          </a>
          <a href="https://github.com/zekkune" target='_blank'><h1 className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            GitHub
          </h1></a>
          
          <h1 className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            Contact Me
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
