import React from "react";

const Experience = () => {
    return (
        <section className="relative flex flex-col xl:flex-row justify-around items-center w-full ">
            <img
                src="/experince.png"
                alt="Designer Portrait"
                className="grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500 h-[70vw]"
            />
            <div className="relative">
                <h2 style={{ fontFamily: 'Boldonse' }} className="text-green-500 mb-12 text-center text-4xl sm:text-7xl md:text-8xl lg:text-9xl w-fit m-auto">
                    EXPERIENCE
                    <span style={{ fontFamily: "Mea Culpa" }} className="text-black absolute -top-9 left-2 sm:-top-16 md:-top-24 lg:-top-[7.5rem]">
                        <span className="">G</span>raphic <span className="">D</span>esign
                    </span>
                </h2>
                <div className="flex justify-center items-center flex-col xl:flex-row">
                    <div className="text-gray-700 mb-2 p-4 max-w-md">
                        <h3 className="font-medium text-2xl mb-2 sm:text-3xl">Liceria & Co.</h3>
                        <p className="mb-7 text-">WEB DEVELOPER</p>
                        <p className="text-sm ">
                            Led development of e-commerce platform with responsive design. Improved load times by 40% and increased user engagement. Integrated payment systems and enhanced security features.
                        </p>
                    </div>
                    <div className="text-gray-700 mb-2 p-4 max-w-md">
                        <h3 className="font-medium text-2xl mb-2 sm:text-3xl</div>">Parre Textiles</h3>
                        <p className="mb-7 text-">WEB DEVELOPER</p>
                        <p className="text-sm ">
                            Developed inventory management system using modern frameworks. Reduced manual data entry by 60% with automated workflows. Created documentation and trained staff.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
