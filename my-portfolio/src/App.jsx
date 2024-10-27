import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

const App = () => {
  const targetRef = useRef(null);

  return (
    <>
      <div className='h-auto'>
        <Navbar targetRef={targetRef} />
        <Home />
        <Skills ref={targetRef} />
      </div>
    </>
  );
};

export default App;
