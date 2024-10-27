// src/components/TypingEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer.", "Designer.", "Freelancer."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 2500,
      loop: true
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance on unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 className='text-gradient dark:bg-gradient-to-b from-cherryblossom via-driedblossom to-cherryblossom dark:animate-gradient-y text-8xl flex flex-initial pb-2 border border-green-700 self-center'>
      <span ref={typedElement} className='flex flex-auto'></span>
    </h1>
  );
};

export default TypedComponent;
