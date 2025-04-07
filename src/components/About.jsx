import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            });
        }, sectionRef);

        return () => ctx.revert(); // Clean up on unmount
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-white px-8 py-12 relative"
        >
            {/* Left Content */}
            <div ref={textRef} className="relative max-w-xl">
                {/* Big Name Heading */}
                <h1
                    className="text-6xl sm:text-8xl md:text-[8rem] xl:text-[10rem] 2xl:text-[13rem] text-green-600 leading-none flex justify-between flex-col"
                    style={{ fontFamily: 'Boldonse' }}
                >
                    <div className="mb-4">Claudia</div>
                    <div>Silvia</div>
                    {/* Cursive Subtitle */}
                    <h2
                        style={{ fontFamily: 'Cedarville Cursive' }}
                        className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl  font-extrabold ml-auto text-gray-800 -rotate-6 mt-[-1rem] mb-4  float-start sm:float-left"
                    >
                        Website design
                    </h2>
                </h1>


                {/* Dev Journey Text */}
                <p className=" text-gray-700 leading-relaxed text-sm">
                    Started with <span className="font-semibold">"let's see what this button does"</span> and ended up
                    <span className="text-green-500 font-bold"> knee-deep</span> in code. From silly
                    <span className="font-semibold"> errors</span> to sweet <span className="font-semibold">deploys</span>, my dev journey has been one wild ride — and I'm just getting started!
                </p>
            </div>

            {/* Right Image */}
            <div ref={imageRef} className="relative mt-10 lg:mt-0 ">
                <img
                    src="/about.png"
                    alt="Claudia Silvia"
                    className="max-h-[80vh] object-contain"
                />
                <img
                    src="/butterfly.png"
                    alt="Claudia Silvia"
                    className="max-h-37 absolute  object-contain -left-46 bottom-44 hidden lg:block"
                />

            </div>
            <img src='/wrap.png' className="absolute rotate-180 -bottom-16 -left-4"></img>
        </section>

    );
};

export default About;
// bg-black sm:bg-amber-400 md:bg-green-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-cyan-600