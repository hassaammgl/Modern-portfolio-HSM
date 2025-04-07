import React from 'react'

const Hobby = () => {
    return (
        <div className="bg-black text-white w-full h-screen flex justify-between flex-col relative">
            <h1 style={{
                fontFamily: 'Boldonse'
            }} className="mt-28 font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]">MY HOBBY</h1>

            <div className="flex">
                <div className="border-2 border-amber-600">
                    <p style={{ fontFamily: "Mea Culpa" }} className="">Claudia</p>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div>
                    <img
                        src="/hobby.png"
                        alt="Claudia Silvia"
                        className="object-cover"
                    />
                </div>

                <div className="">
                    <p className="">READING MANGA'S, MANHAWA</p>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hobby
