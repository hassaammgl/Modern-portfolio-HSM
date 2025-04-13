import React from 'react'
import { Element } from 'react-scroll'

const Projects = () => {
    return (
        <Element name="Projects">
            <section className="min-h-screen bg-black text-white p-8 font-sans relative overflow-hidden">
                <h1 className="text-7xl font-bold text-green-500 mb-6">PROJECT 01</h1>
                <div className="mb-10">
                    <p className="text-2xl italic font-signature mb-4">Claudia</p>
                    <p className="max-w-md text-sm leading-relaxed text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>
                <div className="relative flex gap-6">
                    <div className="transform -rotate-3 shadow-lg">
                        <img
                            src="/project01-img1.jpg"
                            alt="Fairy Artwork"
                            width={300}
                            height={300}
                            className="rounded border-8 border-white"
                        />
                    </div>
                    <div className="transform rotate-3 -mt-10 shadow-lg">
                        <img
                            src="/project01-img2.jpg"
                            alt="Whale Illustration"
                            width={300}
                            height={300}
                            className="rounded border-8 border-white"
                        />
                    </div>
                </div>
                <img className="absolute right-0 bottom-0 rotate-6 text-black text-lg p-2 max-w-sm" src='/bottom-wrapper.png' alt='wrapper' />
            </section>
            <div className="w-full h-20 bg-white sm:bg-amber-400 md:bg-green-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-cyan-600" />
            <section className="min-h-screen bg-[#f7f7f5] text-black p-8 font-sans relative overflow-hidden">
                {/* Top Section */}
                <div className="flex justify-between text-sm mb-8">
                    <span>By Claudia Silvia</span>
                    <span>Portfolio Presentation</span>
                    <span>Graphic Designer</span>
                </div>

                {/* Title with Signature Overlay */}
                <div className="relative mb-10">
                    <h1 className="text-7xl font-bold text-green-500 text-center">PROJECT 02</h1>
                    <p className="absolute left-1/3 -top-2 text-4xl italic font-signature transform -rotate-12">
                        Claudia
                    </p>
                </div>

                {/* Images */}
                <div className="flex justify-center gap-6">
                    <div className="transform -rotate-3 shadow-lg">
                        <img
                            src="/project02-img1.jpg"
                            alt="Worker with roller"
                            width={250}
                            height={250}
                            className="rounded border-8 border-white"
                        />
                    </div>
                    <div className="transform rotate-1 shadow-lg">
                        <img
                            src="/project02-img2.jpg"
                            alt="Fashion sketches"
                            width={250}
                            height={250}
                            className="rounded border-8 border-white"
                        />
                    </div>
                    <div className="transform rotate-3 shadow-lg">
                        <img
                            src="/project02-img3.jpg"
                            alt="Botanical drawing"
                            width={250}
                            height={250}
                            className="rounded border-8 border-white"
                        />
                    </div>
                </div>

                {/* Handwritten style text fragments */}
                <div className="absolute bottom-2 left-0 text-sm text-blue-900 italic rotate-2">
                    strongly believe the moment...
                </div>
                <div className="absolute bottom-2 right-0 text-sm text-blue-900 italic -rotate-2">
                    ...strongly
                </div>
            </section>
        </Element>
    )
}

export default Projects
