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
                // y: 100,
                // opacity: 0,
                // duration: 1.2,
                // ease: 'power3.out',
                // scrollTrigger: {
                //     trigger: sectionRef.current,
                //     start: 'top 70%',
                // },
            });

            gsap.from(imageRef.current, {
                // y: 100,
                // opacity: 0,
                // duration: 1.2,
                // delay: 0.2,
                // ease: 'power3.out',
                // scrollTrigger: {
                //     trigger: sectionRef.current,
                //     start: 'top 70%',
                // },
            });
        }, sectionRef);

        return () => ctx.revert(); // Clean up on unmount
    }, []);

    return (
        <section
            ref={sectionRef}
            className=""
        >
            <div ref={textRef} className="">
                <h1 className="" style={{ fontFamily: 'Boldonse' }}>
                    <div className=''>Claudia</div>
                    <div>Silvia.</div>
                </h1>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <h2 style={{ fontFamily: "Cedarville Cursive" }} className="">
                    Website <span className="">design</span>
                </h2>
            </div>

            <div
                ref={imageRef}
                className=""
            >
                <img
                    src="/about.png"
                    alt="Claudia Silvia"
                    className=""
                />
                <img
                    src="/butterfly.png"
                    alt="Butterfly"
                    className=""
                />
            </div>
        </section>
    );
};

export default About;
