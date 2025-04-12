import React from 'react'

const Skills = () => {
  return (
    <section className="relative h-fit w-full flex flex-col justify-center items-center p-4 md:p-7">
      <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-col p-4 md:p-6 justify-center items-center md:items-start w-full md:w-1/3">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">UI/UX DESIGN</h2>
          <p className="font-light text-xs sm:text-sm md:text-base text-center md:text-left">
            Proficient in creating user-centered designs using industry-standard tools like Adobe Creative Suite and Figma.
            Experienced in developing intuitive and aesthetically pleasing interfaces.
          </p>
        </div>
        <div className="rounded-lg w-full md:w-1/3">
          <img
            src="/skills.png"
            alt="Skills"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
        <div className="flex flex-col p-4 md:p-6 justify-center text-center items-center md:items-end w-full md:w-1/3">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">VISUAL DESIGN</h2>
          <p className="font-light text-xs sm:text-sm md:text-base text-center md:text-right">
            Strong background in visual design principles, typography, and color theory.
            Experience with branding, illustration, and print design.
          </p>
        </div>
      </div>
      <div className='relative mt-12 flex justify-between items-center'>
        <span
          className='-rotate-12 text-[8vw] absolute z-10 -top-3 md:-top-9'
          style={{ fontFamily: "Mea Culpa" }}
        >
          Claudia Silvia
        </span>
        <h1
          style={{ fontFamily: 'Boldonse' }}
          className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[13vw]">
          MY SKILLS
        </h1>
        <img className='w-[8rem] absolute top-0 rotate-12 -right-32 hidden md:block' src="butterfly.png" alt="butterfly" />
      </div>
    </section>
  );
}


export default Skills

