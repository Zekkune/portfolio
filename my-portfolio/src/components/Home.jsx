import TypedComponent from "./TypedComponent";
import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import React from "react";

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState('change this to the original bg color');
    const lightsOff = () => {
        setBackgroundColor(backgroundColor === 'bg-blue-500' ? 'bg-green-500' : 'bg-blue-500');
    }

    

    return (
        <>
            <div className="h-auto w-screen flex flex-col bg-white dark:bg-[#212121] min-h-screen">
                
                <div className="h-3/4 w-screen flex flex-row mt-12 border border-red-500 p-4">
                    <img src="src/assets/me.jpg" alt="picture of christian adams" className="shadow-solid-pony h-auto w-1/4 dark:shadow-solid-pony flex flex-initial rounded-sm border-double border-driedblossom"/>
                    <div className="flex flex-col p-0 border-green-500">
                        <h1 className="radial-text-gradient dark:text-gradient2 text-8xl ml-8 letter-s">Christian Adams,</h1>
                        <TypedComponent />
                    </div>
                </div>
                
            </div>
        </>
    )
}
