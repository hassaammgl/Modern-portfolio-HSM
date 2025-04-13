import React from 'react'
import { Element } from 'react-scroll'

const Projects = () => {
    return (
        <Element name="Projects">
            <section className="bg-black h-fit lg:h-screen text-white relative p-2 flex justify-between items-center overflow-hidden flex-col lg:flex-row">
                <div className='pl-16 flex flex-col justify-center items-start w-2/3 h-screen gap-9'>
                    <h1 style={{ fontFamily: "Boldonse" }} className='text-[6vw] md:text-[7vw] lg:text-[8vw] text-green-500 font-extrabold relative z-10'>PROJECT 01</h1>
                    <h3 style={{ fontFamily: "Mea Culpa" }} className='text-4xl md:text-6xl lg:text-9xl'>Claudia</h3>
                    <p className='w-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim! Iure quidem voluptates id earum similique error quae, cupiditate repellat. Eum omnis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, enim! Iure quidem voluptates id earum similique error quae, cupiditate repellat. Eum omnis eaque at officiis perferendis incidunt odit recusandae maxime?</p>
                </div>
                <div className="relative flex-col justify-center w-1/3 h-screen flex">
                    <div className='w-[25vw] p-3 bg-white absolute z-10 xl:-left-44 2xl:-left-52 top-1/2 rotate-12'>
                        <img src="/arts/art1.jpg" alt="Art piece 1" />
                    </div>
                    <div className='w-[25vw] p-3 bg-white absolute -rotate-12 top-[16.67%]'>
                        <img src="/arts/art2.webp" alt="Art piece 2" />
                    </div>
                </div>
                <img className="absolute -bottom-16 -right-10 rotate-[195deg] hidden lg:block" src='/bottom-wrapper.png' alt='wrapper' />
            </section>
        </Element>
    )
}

export default Projects
