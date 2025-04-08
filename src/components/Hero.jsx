import React, { useEffect, useRef } from 'react';
import { FaGithub } from "react-icons/fa6";
import gsap from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const creativeRef = useRef(null);
    const heroImageRef = useRef(null);
    const textRef = useRef(null);
    const githubRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        gsap.set(titleRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 200,
        });
        gsap.set(creativeRef.current, {
            x: -200,
            rotation: -45,
            opacity: 0,
        });
        gsap.set(heroImageRef.current, {
            y: 200,
            scale: .8
        });
        gsap.set(textRef.current, {
            x: -200,
            scale: 0
        });
        gsap.set(githubRef.current, {
            scale: 0,
        });

        tl
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scale: 1,
                ease: "elastic.out(1, 0.8)"
            })
            .to(creativeRef.current, {
                x: 0,
                rotation: -12,
                opacity: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                delay: -.9
            })
            .to(heroImageRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                delay: -1.5
            })
            .to(textRef.current, {
                x: 0,
                delay: -1.1,
                opacity: 1,
                scale: 1
            })
            .to(githubRef.current, {
                scale: 1,
                delay: -1.3,
                ease: "expo.inOut"
            })

        // Hover animation for title
        titleRef.current.addEventListener('mouseenter', () => {
            gsap.to(titleRef.current, {
                scale: 1.05,
                duration: 0.3
            });
        });

        titleRef.current.addEventListener('mouseleave', () => {
            gsap.to(titleRef.current, {
                scale: 1,
                duration: 0.3
            });
        });

    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden px-4 py-6 flex flex-col justify-between  bg-gradient-to-b from-gray-50 to-white md:px-8">
            <div className="flex-1 flex items-center justify-center relative">

                <h1 ref={titleRef} className="absolute font-extrabold text-green-600 uppercase leading-none tracking-tighter z-0 cursor-pointer text-[13vw]" style={{ fontFamily: 'Boldonse' }}>
                        Portfolio.
                    </h1>

                <img ref={creativeRef} className="-rotate-12 align-middle w-4/5 mb-16 mt-8 md:mt-[1rem]" src="/creative.svg" />
                <img
                    ref={heroImageRef}
                    src={"/hero.png"}
                    alt="model"
                    className="absolute grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500 -bottom-10  mx-auto z-10 max-h-[80vh] object-contain drop-shadow-black/100 opacity-0"
                />
            </div>
            <div className="absolute flex flex-col items-center justify-between text-sm text-gray-700 bottom-0 left-0 px-4 py-4 font-sans w-full md:px-16 md:flex-row md:text-base z-10">
                <p className='relative opacity-0 text-center md:text-left z-100' ref={textRef}>I started with <span className="font-semibold text-green-600">curiosity</span>, just trying to build something cool. <br />
                    What began as simple HTML turned into <span className="font-semibold text-green-600">full-stack apps</span> <br /> powered by <span className="font-semibold">React, MongoDB, and more</span>. <br />
                    Now, I code not just to create — but to <span className="font-semibold text-green-600">solve, innovate, and inspire</span></p>
                <div ref={githubRef} className="relative scale-0 flex items-center gap-4 font-bold text-gray-700 bg-black px-2 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transform transition-all ease-in-out duration-300 cursor-pointer animate-pulse hover:animate-none hover:shadow-md hover:shadow-black mt-4 md:mt-0 z-100">
                    <FaGithub className='text-white text-2xl hover:rotate-12 transition-transform duration-300' /> <span className="text-white">Github</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;