import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-[#f5f5f5] overflow-hidden px-8 py-6 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center relative">
                <h1 className="absolute text-[13vw] font-extrabold text-green-600 uppercase leading-none tracking-tighter z-0" style={{ fontFamily: 'Boldonse' }}>
                    Portfolio.
                </h1>
                <img className="-rotate-12 absolute text-[7vw] font-light italic text-black top-[10%] z-10 w-4xl" src="/creative.svg" />
                <img
                    src={"/hero.png"}
                    alt="model"
                    className="relative grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500 top-4 z-20 max-h-[80vh] object-contain drop-shadow-black/100"
                />
            </div>
            <div className="absolute flex justify-between text-sm text-gray-700 bottom-20 left-0 px-8 py-4 font-sans">
                <p>I started with <span className="font-semibold text-green-600">curiosity</span>, just trying to build something cool. <br />
                    What began as simple HTML turned into <span className="font-semibold text-green-600">full-stack apps</span> powered by <span className="font-semibold">React, MongoDB, and more</span>. <br />
                    Now, I code not just to create — but to <span className="font-semibold text-green-600">solve, innovate, and inspire</span></p>
            </div>
        </section>
    );
};

export default Hero;
