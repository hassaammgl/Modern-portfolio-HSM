

import React from 'react'
import { Element } from 'react-scroll'

const Projects = () => {
    return (
        <Element name="Projects">
            <section className="bg-black min-h-screen lg:h-screen text-white relative px-4 sm:px-8 py-16 lg:py-0 flex flex-col lg:flex-row justify-between items-center overflow-hidden">
                {/* Left Content */}
                <div className='lg:pl-8 xl:pl-16 flex flex-col justify-center items-start lg:w-1/2 h-full lg:h-screen gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1'>
                    <h1 style={{ fontFamily: "Boldonse" }} className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-green-500 font-extrabold'>
                        PROJECT 01
                    </h1>
                    <h3 style={{ fontFamily: "Mea Culpa" }} className='text-3xl md:text-5xl lg:text-7xl'>
                        Claudia
                    </h3>
                    <p className='text-sm md:text-base lg:text-lg max-w-2xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim! Iure quidem voluptates id earum similique error quae, cupiditate repellat. Eum omnis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Right Images */}
                <div className="relative flex justify-center items-center lg:w-1/2 h-[50vh] lg:h-screen w-full order-1 lg:order-2">
                    <div className='relative w-full max-w-2xl h-full flex items-center justify-center'>
                        <div className='absolute w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] top-1/4 left-1/4 lg:left-auto lg:-translate-x-20 transform rotate-12 z-10'>
                            <div className='p-2 bg-white shadow-xl'>
                                <img
                                    src="/arts/art1.jpg"
                                    alt="Art piece 1"
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>

                        <div className='absolute w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] top-1/2 right-1/4 lg:right-auto lg:translate-x-20 transform -rotate-12'>
                            <div className='p-2 bg-white shadow-xl'>
                                <img
                                    src="/arts/art2.webp"
                                    alt="Art piece 2"
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wrapper */}
                <img
                    className="absolute -bottom-10 -right-10 rotate-[195deg] w-48 lg:w-64 opacity-50 lg:opacity-100"
                    src='/bottom-wrapper.png'
                    alt='wrapper'
                />
            </section>
        </Element>
    )
}

export default Projects