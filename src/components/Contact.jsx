import React from 'react'

const Contact = () => {
    return (
        <section className="bg-black text-white flex justify-between items-center relative p-10">
            <div className="flex justify-center items-start flex-col">
                <div className='flex flex-col justify-start items-start relative p-2'>
                    <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
                        LET'S
                    </h2>
                    <span style={{ fontFamily: "Mea Culpa" }} className="absolute right-40 -top-14 text-[12vw] -rotate-12">
                        Work
                    </span>
                    <h2 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase cursor-pointer text-center text-[9vw]">
                        TOGETHER
                    </h2>
                </div>
                <div className="flex relative justify-between">
                    <div className='text-3xl '>
                        <div className="flex items-center">
                            <img className='w-12' src="/icons/globe.svg" alt="Globe" />
                            <a href="#" className="">www.reallygreatsite.com</a>
                        </div>
                        <div className="flex items-center">
                            <img className='w-12' src="/icons/call.svg" alt="call" />
                            <span>+123-456-7890</span>
                        </div>
                        <div className="flex items-center">
                            <img className='w-12' src="/icons/msg.svg" alt="mail" />
                            <span>hello@reallygreatsite.com</span>
                        </div>
                    </div>
                    <img className='w-[8rem] hidden md:block' src="butterfly.png" alt="butterfly" />
                </div>
            </div>
            <img
                src="/contact.png"
                alt="model"
                className="w-auto h-[70vh] hover:bg-yellow-400 transition-all duration-500 ease-in-out"
            />

        </section>
    );
}

export default Contact
