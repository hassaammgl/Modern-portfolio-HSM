import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.from(textRef.current, {
    //             y: 100,
    //             opacity: 0,
    //             duration: 1.2,
    //             ease: 'power3.out',
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: 'top 70%',
    //             },
    //         });

    //         gsap.from(imageRef.current, {
    //             y: 100,
    //             opacity: 0,
    //             duration: 1.2,
    //             delay: 0.2,
    //             ease: 'power3.out',
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: 'top 70%',
    //             },
    //         });
    //     }, sectionRef);

    //     return () => ctx.revert(); // Clean up on unmount
    // }, []);

    return (
        <section
            ref={sectionRef}
            // className="relative w-full h-screen  px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between items-center overflow-hidden"
            className="relative w-full h-fit flex  justify-between items-center "
        >
            {/* Text Side */}
            <div ref={textRef} className="relative w-full pl-20 md:w-1/2 flex flex-col gap-6">
                <h1 className="text-[13vw] font-extrabold leading-none text-green-600 uppercase" style={{ fontFamily: 'Boldonse' }}>
                    <div className='mb-16'>Claudia </div>
                    <div>Silvia.</div>
                </h1>
                <h2 style={{ fontFamily: "Cedarville Cursive" }} className="absolute bottom-0 z-10 -right-[15rem] text-8xl text-black -rotate-12">
                    Website <span className="ml-4">design</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-md  relative top-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
            </div>

            {/* Image Side */}
            <div
                ref={imageRef}
                className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-end relative"
            >
                <img
                    src="/about.png"
                    alt="Claudia Silvia"
                    className="max-w-[70%] md:max-w-full object-contain z-10 grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500 h-full"
                />
                <img
                    src="/butterfly.png"
                    alt="Butterfly"
                    className="absolute bottom-12 -left-40 w-sm object-contain rotate-12 "
                />
            </div>

        </section>
    );
};

export default About;
