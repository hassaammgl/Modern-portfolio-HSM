import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

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

    return (
        <Element name='Contact'>

            <section ref={section}
                className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-black px-8 py-12 relative text-white"
            >
                <div className="flex justify-center items-start flex-col">
                    <div className='flex flex-col justify-start items-start relative p-2'>
                        <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
                            LET'S
                        </h2>
                        <span style={{ fontFamily: "Mea Culpa" }} className="absolute sm:right-16 md:right-24 lg:right-28 xl:right-32 2xl:right-40 sm:-top-3 md:-top-5 xl:-top-8 2xl:-top-14 text-[12vw] -rotate-12">
                            Work
                        </span>
                        <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
                            TOGETHER
                        </h2>
                    </div>
                    <div className="flex relative justify-between">
                        <div className='text-[3vw] font-extralight'>
                            <div className="flex items-center">
                                <img className='w-[3vw] min-w-3.5 max-w-[6rem]' src="/icons/globe.svg" alt="Globe" />
                                <a href="#" className="">www.reallygreatsite.com</a>
                            </div>
                            <div className="flex items-center">
                                <img className='w-[3vw]' src="/icons/call.svg" alt="call" />
                                <span>+123-456-7890</span>
                            </div>
                            <div className="flex items-center">
                                <img className='w-[3vw]' src="/icons/msg.svg" alt="mail" />
                                <span>hello@reallygreatsite.com</span>
                            </div>
                        </div>
                        <img className='w-[8rem] hidden md:block ml-5' src="butterfly.png" alt="butterfly" />
                    </div>
                </div>
                <div className="relative mt-10 lg:mt-0 hidden lg:block">
                    <img
                        src="/contact.png"
                        alt="Claudia Silvia"
                        className="max-h-[80vh] object-contain"
                    />
                </div>

            </section>
        </Element>
    );
}

export default Contact
