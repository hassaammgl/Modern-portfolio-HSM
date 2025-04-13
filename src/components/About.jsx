import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const section = useRef(null);
    useGSAP(() => {
        gsap.set(".title", {
            opacity: 0,
            x: -200,
        })
        gsap.set("#cursive", {
            rotate: "-80deg",
            x: -300,
            y: 30,
            opacity: 0
        })
        gsap.set("#text", {
            opacity: 0,
            y: -200,
        })
        gsap.to(".title", {
            opacity: 1,
            ease: "circ",
            x: 0,
            duration: 1.3,
            delay: .3,
            stagger: .5,
            scrollTrigger: {
                trigger: '.title',
                start: "top 80%",
                end: "top center",

            },
        })
        gsap.to("#cursive", {
            rotate: "-6deg",
            x: 0,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: "#cursive",
                start: "top 80%",
                end: "top center",

            }
        })
        gsap.to("#text", {
            opacity: 1,
            ease: "expo.inOut",
            y: 0,
            duration: 1.3,
            scrollTrigger: {
                trigger: '#text',
                start: "top 80%",
                end: "top center",

            },
        })
    }, { scope: section })
    useGSAP(() => {
        gsap.set(["#girl", "#butterfly"], {
            y: -400,
            opacity: 0
        })
        gsap.to("#girl", {
            y: 0,
            opacity: 1,
            duration: .9,
            scrollTrigger: {
                trigger: '#text',
                start: "top 80%",
                end: "top center",

            },
        })
        gsap.to("#butterfly", {
            y: 0,
            opacity: 1,
            duration: .9,
            delay: .3,
            ease: "ease.inOut",
            scrollTrigger: {
                trigger: '#text',
                start: "top 80%",
                end: "top center",

            },
        })
    }, { scope: section })

    return (
        <Element name='About' >

            <section
                id='about'
                ref={section}
                className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-white px-8 py-12 relative"
            >
                <div className="relative max-w-xl">
                    <h1
                        className="text-6xl sm:text-8xl md:text-[8rem] xl:text-[10rem] 2xl:text-[13rem] text-green-600 leading-none flex justify-between flex-col"
                        style={{ fontFamily: 'Boldonse' }}
                    >
                        <div className="mb-4 title">Claudia</div>
                        <div className="mt-4 title">Silvia</div>
                        <h2
                            id='cursive'
                            style={{ fontFamily: 'Cedarville Cursive' }}
                            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl  font-extrabold ml-auto text-gray-800 -rotate-6 mt-[-1rem] mb-4  float-start sm:float-left"
                        >
                            Website design
                        </h2>
                    </h1>
                    <p id='text' className="text-gray-700 leading-relaxed text-sm">
                        Started with <span className="font-semibold">"let's see what this button does"</span> and ended up
                        <span className="text-green-500 font-bold"> knee-deep</span> in code. From silly
                        <span className="font-semibold"> errors</span> to sweet <span className="font-semibold">deploys</span>, my dev journey has been one wild ride — and I'm just getting started!
                    </p>
                </div>
                <div className="relative mt-10 lg:mt-0 ">
                    <img
                        id='girl'
                        src="/about.png"
                        alt="Claudia Silvia"
                        className="max-h-[80vh] object-contain"
                    />
                    <img
                        id='butterfly'
                        src="/butterfly.png"
                        alt="Claudia Silvia"
                        className="max-h-37 absolute  object-contain -left-46 bottom-44 hidden lg:block"
                    />
                </div>
            </section>
        </Element>

    );
};

export default About;


// bg-black sm:bg-amber-400 md:bg-green-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-cyan-600