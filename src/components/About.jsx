import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);


    useEffect(() => {
        console.log("mounted");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Text fade + slide in
        tl.to(textRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
        }, 0)
            .set(textRef.current, { opacity: 0, x: -80 }, 0)

            // Heading lines (Claudia, Silvia)
            .to(textRef.current.querySelectorAll('h1 div'), {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
            }, "-=0.8")
            .set(textRef.current.querySelectorAll('h1 div'), { y: 50, opacity: 0 }, 0)

            // Cursive Subtitle (Website Design)
            .to(textRef.current.querySelector('h2'), {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            }, "-=0.6")
            .set(textRef.current.querySelector('h2'), { y: 30, opacity: 0 }, 0)

            // Paragraph
            .to(textRef.current.querySelector('p'), {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power1.out',
            }, "-=0.6")
            .set(textRef.current.querySelector('p'), { y: 20, opacity: 0 }, 0);

        // Image animation (on right)
        tl.to(imageRef.current, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power2.out',
        }, "-=1.5")
            .set(imageRef.current, { opacity: 0, x: 80 }, 0); // Set initial state
    }, []);




    return (
        <section
            ref={sectionRef}
            className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-white px-8 py-12 relative"
        >
            <div ref={textRef} className="relative max-w-xl">
                <h1
                    className="text-6xl sm:text-8xl md:text-[8rem] xl:text-[10rem] 2xl:text-[13rem] text-green-600 leading-none flex justify-between flex-col"
                    style={{ fontFamily: 'Boldonse' }}
                >
                    <div className="mb-4">Claudia</div>
                    <div className="mt-4">Silvia</div>
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
        </section>

    );
};

export default About;
// bg-black sm:bg-amber-400 md:bg-green-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-cyan-600