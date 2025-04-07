import React from "react";

const Experience = () => {
    return (
        <section className="relative border-2 border-red-500 flex flex-col xl:flex-row justify-center items-center w-full h-screen">
            <div className="w-1/2 xl:w-1/3">
                <img
                    src="/experince.png"
                    alt="Designer Portrait"
                    className="grayscale-100 hover:grayscale-0 transition-all ease-in-out duration-500"
                />
            </div>
            <div className="relative">
                <h2 style={{ fontFamily: 'Boldonse' }} className="sm:text-8xl md:text-9xl text-green-500 mb-12 text-center">
                    EXPERIENCE
                    <span style={{ fontFamily: "Mea Culpa" }} className="text-7xl text-black absolute -top-[6rem] left-2">
                        <span className="">G</span>raphic <span className="ml-7">D</span>esign
                    </span>
                </h2>
                {/* <div className="flex justify-center items-center">
                    <div className="text-gray-700 w-md">
                        <h3 className="font-medium text-3xl mb-2 pl-2">Liceria & Co.</h3>
                        <p className="mb-7 pl-2">WEB DEVELOPER</p>
                        <p className="text-sm p-2">
                            Led development of e-commerce platform with responsive design. Improved load times by 40% and increased user engagement. Integrated payment systems and enhanced security features.
                        </p>
                    </div>
                    <div className="text-gray-700 w-md">
                        <h3 className="font-medium text-3xl mb-2 pl-2">Parrae Textiles</h3>
                        <p className="mb-7 pl-2">WEB DEVELOPER</p>
                        <p className="text-sm p-2">
                            Developed inventory management system using modern frameworks. Reduced manual data entry by 60% with automated workflows. Created documentation and trained staff.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Experience;
