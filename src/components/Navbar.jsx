import { ScaleIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';
import flowerIcon from '../assets/flower.png'; // ✅ Imported image

const Navbar = ({ targetRef }) => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Observed entry:", entry);
        setIsSticky(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
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
          <img src={flowerIcon} alt="" className='size-8 transition-transform duration-300 hover:rotate-180' />
        </div>

        <div className="lg:mr-64 h-full flex flex-row flex-auto justify-end items-center space-x-8">
          <a
            href='https://www.linkedin.com/in/christian-j-adams/'
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white h-6 w-auto mx-2 border-l border-l-driedblossom pl-8 transition duration-500 hover:text-ponypink dark:hover:text-driedblossom select-none"
          >
            LinkedIn
          </a>
          <a href="https://github.com/zekkune" target='_blank' rel="noopener noreferrer">
            <h1 className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
              GitHub
            </h1>
          </a>

          <a href='#Footer' className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
