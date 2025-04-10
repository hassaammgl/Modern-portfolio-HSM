import React from 'react'

const projects = [
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
    {
        _id: crypto.randomUUID(),
        code: 0,
        imgs: [
            "",
            "",
            ""
        ],
        name: "",
        sticker: ""
    },
]

const Projects = () => {
    return (
        <section className='w-full h-fit bg-black p-10'>
            <h1 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]">Projects</h1>
            
        </section>
    )
}

export default Projects

const Type1 = () => {
    return (
        <div className="bg-black text-white px-6 py-20 md:px-20">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                <div className="max-w-xl space-y-6">

                    <h1 className="text-6xl md:text-7xl font-extrabold text-green-500 leading-none">
                        PROJECT 01
                    </h1>

                    <p className="text-lg text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>

                    <div>
                        <p className="font-cursive text-3xl">Claudia</p>
                    </div>
                </div>

                <div className="relative w-full max-w-xl mx-auto lg:mx-0">
                    <img
                        src="/project1.png"
                        alt="Project 1"
                        className="w-72 md:w-80 border-4 border-white transform rotate-[-5deg] shadow-lg"
                    />

                    <img
                        src="/project2.png"
                        alt="Project 2"
                        className="w-72 md:w-80 border-4 border-white absolute -top-20 -right-10 transform rotate-[5deg] shadow-xl hidden md:block"
                    />
                </div>
            </div>
        </div>
    )
}

const Type2 = () => {
    return (
        <div className="bg-white text-black px-6 py-20 md:px-20 relative overflow-hidden">

            <div className="relative inline-block mb-14">
                <img
                    src="/signature-overlay.png" // <-- Add your custom overlay SVG/PNG
                    alt="Signature Overlay"
                    className="absolute -top-8 -left-6 w-20 rotate-[-10deg] opacity-90 pointer-events-none"
                />
                <h2 className="text-green-600 text-6xl md:text-7xl font-extrabold">PROJECT 02</h2>
            </div>

            <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
                <img
                    src="/project2a.png"
                    alt="Project Image 1"
                    className="w-60 border-4 border-white shadow-md rotate-[-5deg]"
                />
                <img
                    src="/project2b.png"
                    alt="Project Image 2"
                    className="w-60 border-4 border-white shadow-md rotate-[2deg]"
                />
                <img
                    src="/project2c.png"
                    alt="Project Image 3"
                    className="w-60 border-4 border-white shadow-md rotate-[5deg]"
                />
            </div>

            <div className="absolute bottom-2 left-0 rotate-[-5deg] text-blue-900 text-xs opacity-60">
                strongly believe the moment...
            </div>
            <div className="absolute bottom-0 right-0 rotate-[5deg] text-blue-900 text-xs opacity-60 hidden md:block">
                ... strongly
            </div>
        </div>
    )
}