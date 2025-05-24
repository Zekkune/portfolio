import React from 'react';


const Footer = () => {
  return (
    <footer className="relative w-full dark:bg-[#212121] z-[100] shadow-light-above py-6">
      {/* Main Container */}
      <div className="grid grid-cols-3 gap-8 px-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h2 className="dark:text-driedblossom text-base font-semibold">Contact Me</h2>
          <ul className="dark:text-white text-sm space-y-2 mt-2">
            <li>christian.adams22405@gmail.com</li>
            <li>+1 757 658 8852</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h2 className="dark:text-white text-base font-semibold">Quick Links</h2>
          <ul className="dark:text-white text-sm space-y-2 mt-2 text-center">
            <li>
              <a
                href="#Home"
                className="transition duration-500 hover:text-ponypink dark:hover:text-driedblossom opacity-40"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="transition duration-500 hover:text-ponypink dark:hover:text-driedblossom opacity-40"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Home"
                className="transition duration-500 hover:text-ponypink dark:hover:text-driedblossom opacity-40"
              >
                About Me
              </a>
            </li>
          </ul>
        </div>

        {/* Empty Box */}
      </div>

      {/* Socials Section */}
      <div className="mt-4 pt-4">
        <div className="border-t border-driedblossom max-w-5xl mx-auto">
          <div className="grid grid-cols-3 mt-4">
            {/* Socials */}
            <div className="flex justify-start">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/christian-j-adams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white text-sm transition-transform duration-300 hover:scale-105"
                >
                  <img src="src/assets/icons/linkedin.png" alt="" className='h-12 w-12'/>
                </a>
                <a
                  href="https://github.com/zekkune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white text-sm transition-transform duration-300 hover:scale-105"
                >
                  <img src="src/assets/icons/github.png" alt="" className='h-12 w-12'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
