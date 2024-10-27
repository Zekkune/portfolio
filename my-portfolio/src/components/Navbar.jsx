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
          <p className="text-ponypink dark:text-driedblossom font-bold text-lg">Logo goes here</p>
        </div>

        <div className="lg:mr-64 h-full flex flex-row flex-auto justify-end items-center space-x-8">
          <h1 className="dark:text-white h-6 w-auto mx-2 border-l border-l-driedblossom pl-8 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            LinkedIn
          </h1>
          <h1 className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            GitHub
          </h1>
          <h1 className="dark:text-white h-6 w-auto mx-2 transition duration-300 hover:text-ponypink dark:hover:text-driedblossom select-none">
            Contact Me
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
