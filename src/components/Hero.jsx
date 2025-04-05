import React from 'react';
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-[#f5f5f5] overflow-hidden px-8 py-6 flex flex-col justify-between border-b-2 border-gray-200">
            <div className="flex-1 flex items-center justify-center relative">
                <h1 className="absolute text-[13vw] font-extrabold text-green-600 uppercase leading-none tracking-tighter z-0" style={{ fontFamily: 'Boldonse' }}>
                    Portfolio.
                </h1>
                <img className="-rotate-12 absolute text-[7vw] font-light italic text-black top-[10%] z-10 w-4xl" src="/creative.svg" />
                <img
                    src={"/hero.png"}
                    alt="model"
                    className="absolute grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500 -bottom-10 z-20 max-h-[80vh] object-contain drop-shadow-black/100"
                />
            </div>
            <div className="absolute flex items-center justify-between text-sm text-gray-700 bottom-0 left-0 px-16 py-4 font-sans w-full ">
                <p>I started with <span className="font-semibold text-green-600">curiosity</span>, just trying to build something cool. <br />
                    What began as simple HTML turned into <span className="font-semibold text-green-600">full-stack apps</span> <br /> powered by <span className="font-semibold">React, MongoDB, and more</span>. <br />
                    Now, I code not just to create — but to <span className="font-semibold text-green-600">solve, innovate, and inspire</span></p>
                <div className="flex items-center gap-4 font-bold text-gray-700 bg-black px-2 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transform transition-all ease-in-out duration-300 cursor-pointer animate-pulse hover:animate-none">
                    <FaGithub className='text-white text-2xl hover:rotate-12 transition-transform duration-300' /> <span className="text-white">Github</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
