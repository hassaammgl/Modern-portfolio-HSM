// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react';
// import { Element } from 'react-scroll';

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {

//     const section = useRef(null);
//     useGSAP(() => {
//         gsap.set(".title", {
//             opacity: 0,
//             x: -200,
//         })
//         gsap.set("#cursive", {
//             rotate: "-80deg",
//             x: -300,
//             y: 30,
//             opacity: 0
//         })
//         gsap.set("#text", {
//             opacity: 0,
//             y: -200,
//         })
//         gsap.to(".title", {
//             opacity: 1,
//             ease: "circ",
//             x: 0,
//             duration: 1.3,
//             delay: .3,
//             stagger: .5,
//             scrollTrigger: {
//                 trigger: '.title',
//                 start: "top 80%",
//                 end: "top center",

//             },
//         })
//         gsap.to("#cursive", {
//             rotate: "-6deg",
//             x: 0,
//             opacity: 1,
//             y: 0,
//             scrollTrigger: {
//                 trigger: "#cursive",
//                 start: "top 80%",
//                 end: "top center",

//             }
//         })
//         gsap.to("#text", {
//             opacity: 1,
//             ease: "expo.inOut",
//             y: 0,
//             duration: 1.3,
//             scrollTrigger: {
//                 trigger: '#text',
//                 start: "top 80%",
//                 end: "top center",

//             },
//         })
//     }, { scope: section })

//     return (
//         <Element name='Contact'>

//             <section ref={section}
//                 className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-black px-8 py-12 relative text-white"
//             >
//                 <div className="flex justify-center items-start flex-col">
//                     <div className='flex flex-col justify-start items-start relative p-2'>
//                         <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
//                             LET'S
//                         </h2>
//                         <span style={{ fontFamily: "Mea Culpa" }} className="absolute sm:right-16 md:right-24 lg:right-28 xl:right-32 2xl:right-40 sm:-top-3 md:-top-5 xl:-top-8 2xl:-top-14 text-[12vw] -rotate-12">
//                             Work
//                         </span>
//                         <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
//                             TOGETHER
//                         </h2>
//                     </div>
//                     <div className="flex relative justify-between">
//                         <div className='text-[3vw] font-extralight'>
//                             <div className="flex items-center">
//                                 <img className='w-[3vw] min-w-3.5 max-w-[6rem]' src="/icons/globe.svg" alt="Globe" />
//                                 <a href="#" className="">www.reallygreatsite.com</a>
//                             </div>
//                             <div className="flex items-center">
//                                 <img className='w-[3vw]' src="/icons/call.svg" alt="call" />
//                                 <span>+123-456-7890</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <img className='w-[3vw]' src="/icons/msg.svg" alt="mail" />
//                                 <span>hello@reallygreatsite.com</span>
//                             </div>
//                         </div>
//                         <img className='w-[8rem] hidden md:block ml-5' src="butterfly.png" alt="butterfly" />
//                     </div>
//                 </div>
//                 <div className="relative mt-10 lg:mt-0 hidden lg:block">
//                     <img
//                         src="/contact.png"
//                         alt="Claudia Silvia"
//                         className="max-h-[80vh] object-contain"
//                     />
//                 </div>

//             </section>
//         </Element>
//     );
// }

// export default Contact
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const section = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top center",
                end: "bottom center",
                // scrub: 1,
            }
        });

        // Initial setups
        gsap.set(".contact-title", { opacity: 0, x: -100 });
        gsap.set("#cursive", { rotate: "-80deg", x: -300, opacity: 0 });
        gsap.set(".contact-info-item", { opacity: 0, x: -50 });
        gsap.set(".contact-image", { scale: 0.8, opacity: 0 });
        gsap.set(".butterfly", { scale: 0, rotate: 45 });

        // Title animations
        tl.to(".contact-title", {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out"
        })
            .to("#cursive", {
                rotate: "-6deg",
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.5")
            .to(".contact-info-item", {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "back.out(1.7)"
            })
            .to(".butterfly", {
                scale: 1,
                rotate: 0,
                duration: 0.8,
                ease: "bounce.out"
            }, "-=0.3")
            .to(".contact-image", {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5");

    }, { scope: section });

    return (
        <Element name='Contact'>
            <section
                ref={section}
                className="w-full h-fit flex justify-between items-center flex-col lg:flex-row bg-black px-4 sm:px-8 lg:px-16 py-12 md:py-16 lg:py-24 relative text-white overflow-hidden"
            >
                <div className="flex justify-center items-start flex-col w-full lg:w-auto mb-8 lg:mb-0">
                    <div className='flex flex-col justify-start items-start relative p-2 w-full'>
                        <h2
                            style={{ fontFamily: 'Boldonse' }}
                            className="contact-title font-extrabold text-green-600 uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[9vw]"
                        >
                            LET'S
                        </h2>
                        <span
                            id="cursive"
                            style={{ fontFamily: "Mea Culpa" }}
                            className="absolute right-8  sm:right-16 md:right-24 lg:right-28 xl:right-32 2xl:right-40 -top-4 sm:-top-3 md:-top-5 xl:-top-8 2xl:-top-14 text-5xl sm:text-8xl md:text-9xl lg:text-[12vw] -rotate-12"
                        >
                            Work
                        </span>
                        <h2
                            style={{ fontFamily: 'Boldonse' }}
                            className="contact-title font-extrabold text-green-600 uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[9vw] mt-14"
                        >
                            TOGETHER
                        </h2>
                    </div>

                    <div className="flex relative justify-between items-start w-full mt-8 lg:mt-4 pl-2 pr-4">
                        <div className='text-base sm:text-xl md:text-2xl lg:text-[2vw] xl:text-xl font-extralight space-y-4 md:space-y-6'>
                            <div className="contact-info-item flex items-center gap-2 sm:gap-4 p-2 hover:bg-white/10 rounded-lg transition-all">
                                <img className='w-6 sm:w-8 md:w-10 lg:w-[3vw]' src="/icons/globe.svg" alt="Globe" />
                                <a href="#" className="hover:text-green-600 transition-colors">www.reallygreatsite.com</a>
                            </div>
                            <div className="contact-info-item flex items-center gap-2 sm:gap-4 p-2 hover:bg-white/10 rounded-lg transition-all">
                                <img className='w-6 sm:w-8 md:w-10 lg:w-[3vw]' src="/icons/call.svg" alt="call" />
                                <span>+123-456-7890</span>
                            </div>
                            <div className="contact-info-item flex items-center gap-2 sm:gap-4 p-2 hover:bg-white/10 rounded-lg transition-all">
                                <img className='w-6 sm:w-8 md:w-10 lg:w-[3vw]' src="/icons/msg.svg" alt="mail" />
                                <span>hello@reallygreatsite.com</span>
                            </div>
                        </div>
                        <img
                            className='butterfly w-24 md:w-32 lg:w-40 ml-4 hidden md:block'
                            src="butterfly.png"
                            alt="butterfly"
                        />
                    </div>
                </div>

                <div className="contact-image relative w-full lg:w-auto flex justify-center mt-8 lg:mt-0 px-4 sm:px-0">
                    <img
                        src="/contact.png"
                        alt="Claudia Silvia"
                        className="max-h-[50vh] md:max-h-[70vh] lg:max-h-[80vh] object-contain"
                    />
                </div>
            </section>
        </Element>
    );
}

export default Contact;