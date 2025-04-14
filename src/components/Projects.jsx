import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const section = useRef(null);
    useGSAP(() => {
        gsap.set("#heading", {
            x: -800,
            opacity: 0,
        })
        gsap.set("#cursive", {
            opacity: 0,
            delay: .3,
            x: -600,
        })
        gsap.set("#para", {
            opacity: 0,
            delay: .6,
            x: -400,
        })
        gsap.set("#img1", {
            rotate: "75deg",
            y: 600,
            opacity: 0,
        })
        gsap.set("#img2", {
            rotate: "66deg",
            opacity: 0,
            y: 400,
        })
        gsap.set("#wrapper", {
            opacity: 0,
            y: 400,
        })

        gsap.to(["#heading", "#cursive", "#para"], {
            x: 0,
            stagger: .1,
            opacity: 1,
            duration: 1,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ["#heading", "#cursive", "#para"],
                start: "top 60%",
                end: "top 50%",
                markers: true
            }
        })
        gsap.to("#img1", {
            y: 0,
            stagger: .1,
            opacity: 1,
            rotate: 12,
            duration: 1,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ["#heading", "#cursive", "#para"],
                start: "top 60%",
                end: "top 50%",
                markers: true
            }
        })
        gsap.to("#img2", {
            y: 0,
            stagger: .1,
            opacity: 1,
            rotate: -12,
            duration: 1,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ["#heading", "#cursive", "#para"],
                start: "top 60%",
                end: "top 50%",
                markers: true
            }
        })
        gsap.to("#wrapper", {
            y: 0,
            stagger: .1,
            opacity: 1,
            duration: 1.5,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ["#heading", "#cursive", "#para"],
                start: "top 60%",
                end: "top 50%",
                markers: true
            }
        })

    }, { scope: section })

    return (
        <Element name="Projects">
            <section ref={section} className="bg-black min-h-screen lg:h-screen text-white relative px-4 sm:px-8 py-16 lg:py-0 flex flex-col lg:flex-row justify-between items-center overflow-hidden">
                <div className='lg:pl-8 xl:pl-16 flex flex-col justify-center items-start lg:w-1/2 h-full lg:h-screen gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1'>
                    <h1 id='heading' style={{ fontFamily: "Boldonse" }} className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-green-500 font-extrabold'>
                        PROJECT 01
                    </h1>
                    <h3 id='cursive' style={{ fontFamily: "Mea Culpa" }} className='text-3xl md:text-5xl lg:text-7xl'>
                        Claudia
                    </h3>
                    <p id='para' className='text-sm md:text-base lg:text-lg max-w-2xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim! Iure quidem voluptates id earum similique error quae, cupiditate repellat. Eum omnis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative flex justify-center items-center lg:w-1/2 h-[50vh] lg:h-screen w-full order-1 lg:order-2">
                    <div className='relative w-full max-w-2xl h-full flex items-center justify-center'>
                        <div id='img1' className='absolute w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] top-1/4 left-1/4 lg:left-auto lg:-translate-x-20 transform rotate-12 z-10'>
                            <div className='p-2 bg-white shadow-xl'>
                                <img
                                    src="/arts/art1.jpg"
                                    alt="Art piece 1"
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>

                        <div id='img2' className='absolute w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] top-1/2 right-1/4 lg:right-auto lg:translate-x-20 transform -rotate-12'>
                            <div className='p-2 bg-white shadow-xl'>
                                <img
                                    src="/arts/art2.webp"
                                    alt="Art piece 2"
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    id='wrapper'
                    className="absolute -bottom-10 -right-10 rotate-[195deg] w-48 lg:w-64 opacity-50 lg:opacity-100"
                    src='/bottom-wrapper.png'
                    alt='wrapper'
                />
            </section>
        </Element>
    )
}

export default Projects