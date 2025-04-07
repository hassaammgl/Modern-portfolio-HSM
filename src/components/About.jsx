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
            className="w-full h-screen flex justify-between items-center flex-col lg:flex-row "
        >
            <div ref={textRef} className="relative p-5">
                <h1 className="" style={{ fontFamily: 'Boldonse' }}>
                    <div className=''>Claudia</div>
                    <div>Silvia <span className='text-green-600'>.</span></div>
                </h1>
                <h2 style={{ fontFamily: "Cedarville Cursive" }} className="">
                    Website <span className="">design</span>
                </h2>
                <p className="">
                    Started with "let's see what this <b>button</b> does" and ended up <b className='text-green-500'>knee-deep</b> in code. From silly <b>errors</b> to sweet deploys, my dev journey has been one wild ride — and I'm just getting started!
                </p>

            </div>

            <div
                ref={imageRef}
                className="flex "
            >
                <img
                    src="/about.png"
                    alt="Claudia Silvia"
                    className="max-h-[80vh]"
                />
                <img
                    src="/butterfly.png"
                    alt="Butterfly"
                    className="max-h-36"
                />
            </div>
        </section>
    );
};

export default About;
