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
        // <section
        //     ref={sectionRef}
        //     className="w-full h-fit flex justify-between items-center flex-col lg:flex-row "
        // >
        //     <div ref={textRef} className="relative p-5">
        //         <h1 className="text-7xl md:text-[6rem] text-green-600" style={{ fontFamily: 'Boldonse' }}>
        //             <div className='mb-6'>Claudia</div>
        //             <div>Silvia.</div>
        //         </h1>
        //         <h2 style={{ fontFamily: "Cedarville Cursive" }} className="text-3xl font-extrabold relative bottom-6 left-26 -rotate-6">
        //             Website <span className="">design</span>
        //         </h2>
        //         <p className="">
        //             Started with "let's see what this <b>button</b> does" and ended up <b className='text-green-500'>knee-deep</b> in code. From silly <b>errors</b> to sweet deploys, my dev journey has been one wild ride — and I'm just getting started!
        //         </p>

        //     </div>

        //     <div
        //         ref={imageRef}
        //         className="flex "
        //     >
        //         <img
        //             src="/about.png"
        //             alt="Claudia Silvia"
        //             className="max-h-[80vh]"
        //         />
        //         <img
        //             src="/butterfly.png"
        //             alt="Butterfly"
        //             className="max-h-36 hidden"
        //         />
        //     </div>
        // </section>
        <section
            ref={sectionRef}
            className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-white px-8 py-12"
        >
            {/* Left Content */}
            <div ref={textRef} className="relative max-w-xl">
                {/* Big Name Heading */}
                <h1
                    className="text-6xl md:text-[6rem] text-green-600 leading-none"
                    style={{ fontFamily: 'Boldonse' }}
                >
                    <div className="mb-4">Claudia</div>
                    <div>Silvia</div>
                </h1>

                {/* Cursive Subtitle */}
                <h2
                    style={{ fontFamily: 'Cedarville Cursive' }}
                    className="text-3xl text-black -rotate-6 mt-[-1rem] mb-4"
                >
                    Website <span className="italic">design</span>
                </h2>

                {/* Dev Journey Text */}
                <p className="text-lg text-gray-700 leading-relaxed">
                    Started with <span className="font-semibold">"let's see what this button does"</span> and ended up
                    <span className="text-green-500 font-bold"> knee-deep</span> in code. From silly
                    <span className="font-semibold"> errors</span> to sweet <span className="font-semibold">deploys</span>, my dev journey has been one wild ride — and I'm just getting started!
                </p>
            </div>

            {/* Right Image */}
            <div ref={imageRef} className="mt-10 lg:mt-0">
                <img
                    src="/about.png"
                    alt="Claudia Silvia"
                    className="max-h-[80vh] object-contain"
                />
            </div>
        </section>

    );
};

export default About;
