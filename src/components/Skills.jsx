import React from 'react'

const Skills = () => {
  return (
      <div className="bg-[#f9f9f7] min-h-screen px-8 py-12 text-black font-sans">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top header */}
          <div className="flex justify-between items-center text-sm text-gray-800 mb-6">
            <span>By Claudia Silvia</span>
            <span className="font-semibold text-lg">Portfolio Presentation</span>
            <span>Graphic Designer</span>
          </div>

          {/* Center content */}
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-16 my-12">
            {/* Graphic Designer text block */}
            <div className="text-left max-w-xs mb-8 md:mb-0">
              <h2 className="text-xl font-semibold mb-3">GRAPHIC DESIGNER</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Center Image */}
            <div className="relative w-[200px] h-[250px]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="w-20 h-5 bg-[#f9f9f7] rotate-[5deg] border border-gray-300 shadow-sm"></div>
              </div>
              <img
                src="/your-image-path.jpg"
                alt="Model"
                className="rounded-md grayscale object-cover shadow-lg"
              />
            </div>

            {/* Illustration text block */}
            <div className="text-left max-w-xs mt-8 md:mt-0">
              <h2 className="text-xl font-semibold mb-3">ILLUSTRATION</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* MY SKILL Text */}
          <div className="relative mt-16">
            <h1 className="text-7xl md:text-8xl font-extrabold text-green-600 tracking-tight">
              MY SKILL
            </h1>

            {/* Signature Text */}
            <span className="absolute -top-8 left-4 text-black font-signature text-4xl">
              Claudia Silvia
            </span>

            {/* Bottom right frog image */}
            <img
              src="/your-frog-img.png"
              alt="frog"
              className="absolute right-0 -bottom-4 w-32 md:w-40"
            />
          </div>
        </div>
      </div>
    );
  }


export default Skills
