import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Hobby = () => {

    const section = useRef(null);
    useGSAP(() => {
        // Initial setup
        gsap.set(["#heading", "#para1", "#para2", "#img"], {
            opacity: 0,
            y: (i) => [400, 0, 0, 600][i],  // Index-based: heading, para1, para2, img
            x: (i) => [0, 400, -400, 0][i]
        });

        // Create timeline with scroll trigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#heading',
                start: "top 80%",
                end: "top center"
            },
            defaults: { // Set default values for all animations
                duration: 1.5,
                ease: "elastic.out(1, 0.8)"
            }
        });

        // Add animations
        tl.to("#heading", { y: 0, opacity: 1 })
            .to("#img", { y: 0, opacity: 1 }, "<") // Run with heading
            .to(["#para1", "#para2"], {
                x: 0,
                opacity: 1,
                stagger: 0.2 // Stagger between paragraphs
            }, "<0.2"); // Start 0.2s after previous animations

    }, { scope: section });

    return (
        <Element name='Hobby'>
            <section ref={section} className="bg-black text-white w-full flex justify-between flex-col relative p-8 pt-20">
                <h1 style={{
                    fontFamily: 'Boldonse'
                }}
                    id='heading'
                    className="font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]">MY HOBBY</h1>
                <div className="flex justify-center items-center flex-col md:flex-row">
                    <div id='para1' className="flex flex-col p-6 justify-center items-center">
                        <p style={{ fontFamily: "Mea Culpa" }} className="-rotate-12 text-7xl mb-9"><span className='text-8xl'>C</span>laudia</p>
                        <p className="font-light">
                            As an artist, I find joy in exploring different forms of visual storytelling.
                            My passion for art extends from traditional mediums to digital creations,
                            allowing me to express creativity in unique ways.
                        </p>
                    </div>
                    <div id='img' className='rounded-lg h-full w-full md:w-7xl relative md:-top-32 '>
                        <img
                            src="/hobby.png"
                            alt="Claudia Silvia"
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div id='para2' className="flex flex-col p-6 justify-center text-center items-center md:items-end">
                        <p className="font-bold text-2xl mb-6">READING MANGA'S & MANHAWA</p>
                        <p className="font-light text-start md:text-end">
                            These artistic mediums inspire my own creative work. The detailed illustrations
                            and unique storytelling techniques in manga and manhwa have greatly influenced
                            my artistic style and perspective.
                        </p>
                    </div>
                </div>

            </section>
        </Element>
    )
}

export default Hobby
