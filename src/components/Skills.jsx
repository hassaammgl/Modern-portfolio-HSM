import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const section = useRef(null);
  useGSAP(() => {
    gsap.set(["#cursive", "#heading", "#butterfly", "#para1", "#para2", "#img", "#wrap"], {
      x: (i) => [-600, -800, 400, -400, 400, 0, 0][i],
      y: (i) => [-200, 0, 0, 0, 0, 600, 0][i],
      rotate: (i) => ["75deg", 0, 0, 0, 0, 0, 0][i],
      scale: (i) => [1, 1, 1, 1, 1, 1, 3][i],
      opacity: (i) => [0, 0, 0, 0, 0, 0, 0][i],
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#heading",
        start: "top 80%",
        end: "top 70%"
      },
      defaults: {
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.8)"
      }
    })

    tl
      .to("#cursive", {
        rotate: "-12deg",
        x: 0,
        y: 0
      })
      .to("#heading", {
        x: 0,
      }, "<.4")
      .to("#butterfly", {
        x: 0
      }, "<")
      .to("#para1", {
        x: 0
      }, "<")
      .to("#para2", {
        x: 0
      }, "<")
      .to("#img", {
        y: 0
      }, "<")
      .to("#wrap", {
        scale: 1,
        rotate: "45deg"
      }, "<.5")

  }, { scope: section })
  return (
    <Element name='Skills'>
      <section ref={section} className="relative h-fit w-full flex flex-col justify-center items-center p-4 md:p-7">
        <div className='relative mt-12 flex justify-between items-center'>
          <span
            id='cursive'
            className='-rotate-12 text-[8vw] absolute z-10 -top-3 md:-top-9'
            style={{ fontFamily: "Mea Culpa" }}
          >
            Claudia Silvia
          </span>
          <h1
            id='heading'
            style={{ fontFamily: 'Boldonse' }}
            className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[13vw]">
            MY SKILLS
          </h1>

          <img id='butterfly' className='w-[8rem] absolute top-0 rotate-12 -right-32 hidden md:block' src="butterfly.png" alt="butterfly" />
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
          <div id='para1' className="flex flex-col p-4 md:p-6 justify-center items-center md:items-start w-full md:w-1/3">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">UI/UX DESIGN</h2>
            <p className="font-light text-xs sm:text-sm md:text-base text-center md:text-left">
              Proficient in creating user-centered designs using industry-standard tools like Adobe Creative Suite and Figma.
              Experienced in developing intuitive and aesthetically pleasing interfaces.
            </p>
          </div>
          <div id='img' className=" relative rounded-lg w-full md:w-1/3">
            <img
              id='wrap'
              src="/wrap.png"
              alt="wrap"
              className="object-cover rounded-lg w-[3rem] absolute rotate-45 -top-16"
            />
            <img
              src="/skills.png"
              alt="Skills"
              className="object-cover w-full h-[70vh] border-8 border-gray-300 shadow-2xl"
            />
          </div>
          <div id='para2' className="flex flex-col p-4 md:p-6 justify-center text-center items-center md:items-end w-full md:w-1/3">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">VISUAL DESIGN</h2>
            <p className="font-light text-xs sm:text-sm md:text-base text-center md:text-right">
              Strong background in visual design principles, typography, and color theory.
              Experience with branding, illustration, and print design.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}


export default Skills

