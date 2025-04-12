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
    // {
    //     _id: crypto.randomUUID(),
    //     code: false,
    //     imgs: [
    //         "/arts/art3.jpeg",
    //         "/arts/art4.jpeg",
    //         "/arts/art5.jpg"
    //     ],
    //     name: "Neon Symphony",
    //     animationType: "fade-out",
    //     descriptions: "Urban nightscapes come alive with vibrant neon hues, creating a visual symphony of modern city life."
    // },
    // {
    //     _id: crypto.randomUUID(),
    //     code: true,
    //     imgs: [
    //         "/arts/art6.webp",
    //         "/arts/art7.jpg"
    //     ],
    //     name: "Digital Wilderness",
    //     animationType: "fade-in",
    //     descriptions: "Where technology meets nature, creating a surreal landscape of digital flora and fauna in virtual ecosystems."
    // },
    // {
    //     _id: crypto.randomUUID(),
    //     code: false,
    //     imgs: [
    //         "/arts/art8.jpg",
    //         "/arts/art9.jpg",
    //         "/arts/art10.jpg",
    //     ],
    //     name: "Quantum Pulse",
    //     animationType: "fade-out",
    //     descriptions: "Exploring the microscopic realm where quantum mechanics creates mesmerizing patterns and endless possibilities."
    // },
    // {
    //     _id: crypto.randomUUID(),
    //     code: true,
    //     imgs: [
    //         "/arts/art11.jpg",
    //         "/arts/art12.webp",
    //     ],
    //     name: "Cyber Eden",
    //     animationType: "fade-in",
    //     descriptions: "A digital paradise where artificial intelligence and organic forms blend into a harmonious utopia."
    // },
    // {
    //     _id: crypto.randomUUID(),
    //     code: false,
    //     imgs: [
    //         "/arts/art13.jpg",
    //         "/arts/art14.jpg",
    //         "/arts/art15.webp",
    //     ],
    //     name: "Ethereal Nexus",
    //     animationType: "fade-out",
    //     descriptions: "A convergence of different dimensions, where ethereal beings and abstract forms create otherworldly connections."
    // },
]

const Projects = () => {
    const renderProject = (project) => {
        const commonClasses = "px-6 py-20 md:px-20 h-screen flex w-full sticky rounded-md";
        const darkTheme = "bg-black text-white border-[1px] border-gray-700 " + commonClasses;
        const lightTheme = "bg-white text-black overflow-hidden " + commonClasses;

        return (
            <div
                key={project._id}
                id={project.animationType}
                className={project.code ? darkTheme : lightTheme}
            >
                {project.code ? (
                    <Type1
                        name={project.name}
                        imgs={project.imgs}
                        desc={project.descriptions}
                    />
                ) : (
                    <Type2
                        name={project.name}
                        imgs={project.imgs}
                        desc={project.descriptions}
                    />
                )}
            </div>
        );
    };

    return (
        <section className='w-full h-fit bg-black p-10 relative'>
            <h1
                style={{ fontFamily: 'Boldonse' }}
                className="font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]"
            >
                Projects
            </h1>
            {projects.map(renderProject)}
        </section>
    );
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
                <ProjectImage
                    src={imgs[0]}
                    alt="Project 1"
                    className="w-72 h-72 md:h-80 md:w-80 border-4 border-white shadow-lg"
                    rotate={-5}
                />

                <ProjectImage
                    src={imgs[1]}
                    alt="Project 2"
                    className="w-72 h-72 md:h-80 md:w-80 border-4 border-white absolute -top-20 -right-10 shadow-xl hidden md:block"
                    rotate={5}
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
                <ProjectImage
                    src={imgs[0]}
                    alt="Project Image 3"
                    rotate={-5}
                />
                <ProjectImage
                    src={imgs[1]}
                    alt="Project Image 3"
                    rotate={2}
                />
                <ProjectImage
                    src={imgs[2]}
                    alt="Project Image 3"
                    rotate={5}
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

// const Image = ({ src, alt = "Project Img", rotate }) => (
//     <img
//         src={src}
//         alt={alt}
//         style={{ transform: `rotate(${rotate}deg)` }}
//         className="w-60 h-60 border-4 border-white shadow-md"
//     />
// )
const ProjectImage = ({ src, alt = "Project Img", className, rotate }) => {
    const baseClasses = "border-4 border-white shadow-md";
    const finalClasses = className || `w-60 h-60 ${baseClasses}`;

    return (
        <img
            src={src}
            alt={alt}
            style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
            className={finalClasses}
        />
    );
}

