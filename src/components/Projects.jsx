import React from 'react'

const projects = [
    {
        _id: crypto.randomUUID(),
        code: true,
        imgs: [
            "/arts/art1.jpg",
            "/arts/art2.webp"
        ],
        name: "Cosmic Dreamer",
        animationType: "fade-in",
        descriptions: "A journey through celestial landscapes, where dreams and reality intertwine in a cosmic dance of colors and light."
    },
    {
        _id: crypto.randomUUID(),
        code: false,
        imgs: [
            "/arts/art3.jpeg",
            "/arts/art4.jpeg",
            "/arts/art5.jpg"
        ],
        name: "Neon Symphony",
        animationType: "fade-out",
        descriptions: "Urban nightscapes come alive with vibrant neon hues, creating a visual symphony of modern city life."
    },
    {
        _id: crypto.randomUUID(),
        code: true,
        imgs: [
            "/arts/art6.webp",
            "/arts/art7.jpg"
        ],
        name: "Digital Wilderness",
        animationType: "fade-in",
        descriptions: "Where technology meets nature, creating a surreal landscape of digital flora and fauna in virtual ecosystems."
    },
    {
        _id: crypto.randomUUID(),
        code: false,
        imgs: [
            "/arts/art8.jpg",
            "/arts/art9.jpg",
            "/arts/art10.jpg",
        ],
        name: "Quantum Pulse",
        animationType: "fade-out",
        descriptions: "Exploring the microscopic realm where quantum mechanics creates mesmerizing patterns and endless possibilities."
    },
    {
        _id: crypto.randomUUID(),
        code: true,
        imgs: [
            "/arts/art11.jpg",
            "/arts/art12.webp",
        ],
        name: "Cyber Eden",
        animationType: "fade-in",
        descriptions: "A digital paradise where artificial intelligence and organic forms blend into a harmonious utopia."
    },
    {
        _id: crypto.randomUUID(),
        code: false,
        imgs: [
            "/arts/art13.jpg",
            "/arts/art14.jpg",
            "/arts/art15.webp",
        ],
        name: "Ethereal Nexus",
        animationType: "fade-out",
        descriptions: "A convergence of different dimensions, where ethereal beings and abstract forms create otherworldly connections."
    },
]

const Projects = () => {
    return (
        <section className='w-full h-fit bg-black p-10'>
            <h1 style={{ fontFamily: 'Boldonse' }} className="font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]">Projects</h1>
            {projects.map(i => (
                <div id={i.animationType} className={i.code ?
                    'bg-black text-white px-6 py-20 md:px-20 border-[1px] rounded-md border-gray-700 my-2 h-screen flex '
                    :
                    "bg-white text-black px-6 py-20 md:px-20 overflow-hidden rounded-md h-screen flex"} key={i._id}>
                    {i.code ?
                        <Type1 name={i.name} imgs={i.imgs} desc={i.descriptions} /> :
                        <Type2 name={i.name} imgs={i.imgs} desc={i.descriptions} />
                    }
                </div>
            ))}
        </section>
    )
}

export default Projects

const Type1 = ({ name, imgs, desc }) => {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="max-w-xl space-y-6">

                <h1 style={{
                    fontFamily: 'Boldonse'
                }} className="text-7xl md:text-9xl font-extrabold text-green-500 leading-none">
                    {name}
                </h1>

                <div>
                    <p style={{
                        fontFamily: "Mea Culpa"
                    }} className="text-7xl">Claudia</p>
                </div>
                <p className="text-sm text-gray-200">{desc}</p>

            </div>

            <div className="relative w-full max-w-xl mx-auto lg:mx-0">
                <Image2
                    src={imgs[0]}
                    alt="Project 1"
                    className="w-72 h-72 md:h-80 md:w-80 border-4 border-white transform rotate-[-5deg] shadow-lg"
                />

                <Image2
                    src={imgs[1]}
                    alt="Project 2"
                    className="w-72 h-72 md:h-80 md:w-80 border-4 border-white absolute -top-20 -right-10 transform rotate-[5deg] shadow-xl hidden md:block"
                />
            </div>
        </div>
    )
}

const Type2 = ({ name, imgs }) => {
    return (
        <>
            <div className="relative inline-block mb-14">
                <div style={{ fontFamily: "Mea Culpa" }}
                    className="absolute -top-8 -left-6 w-20 rotate-[-10deg] opacity-90 pointer-events-none"
                >Signature</div>
                <h2 style={{
                    fontFamily: 'Boldonse'
                }} className="text-green-600 text-6xl md:text-7xl font-extrabold">{name}</h2>
            </div>
            <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
                <Image
                    src={imgs[0]}
                    alt="Project Image 3"
                    rotate="-5"
                />
                <Image
                    src={imgs[1]}
                    alt="Project Image 3"
                    rotate="2"
                />
                <Image
                    src={imgs[2]}
                    alt="Project Image 3"
                    rotate="5"
                />
            </div>
            <div className="absolute bottom-2 left-0 rotate-[-5deg] text-blue-900 text-xs opacity-60">
                strongly believe the moment...
            </div>
            <div className="absolute bottom-0 right-0 rotate-[5deg] text-blue-900 text-xs opacity-60 hidden md:block">
                ... strongly
            </div>
        </>
    )
}

const Image = ({ src, alt = "Project Img", rotate }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-60 h-60 border-4 border-white shadow-md rotate-[${rotate}deg]`}
        />
    )
}
const Image2 = ({ src, alt = "Project Img", className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
        />
    )
}