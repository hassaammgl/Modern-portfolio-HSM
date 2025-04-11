import React from 'react'

const Contact = () => {
    return (
        <section className="bg-black text-white px-6 py-16 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col items-start space-y-6">
                        <div>
                            <h2 className="text-green-500 text-7xl lg:text-8xl font-extrabold leading-tight">
                                LET’S
                            </h2>
                            <h2 className="text-green-500 text-7xl lg:text-8xl font-extrabold leading-tight -mt-4">
                                TOGETHER
                            </h2>
                            <span className="absolute left-28 top-36 text-white text-4xl font-signature">
                                Work
                            </span>
                        </div>

                        <div className="space-y-3 text-base text-white mt-6">
                            <div className="flex items-center gap-2">
                                <span>🌐</span>
                                <a href="#" className="hover:underline">www.reallygreatsite.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                <span>+123-456-7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>✉️</span>
                                <span>hello@reallygreatsite.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="/your-model-img.png"
                            alt="model"
                            className="w-[300px] md:w-[400px] object-cover grayscale contrast-125 drop-shadow-xl border-white border-[6px] rounded-lg"
                        />
                        <img
                            src="/your-frog-img.png"
                            alt="frog"
                            className="absolute bottom-[-20px] left-[-50px] w-28"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact
