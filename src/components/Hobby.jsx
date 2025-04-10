import React from 'react'

const Hobby = () => {
    return (
        <div className="bg-black text-white w-full flex justify-between flex-col relative p-8 pt-20">
            <h1 style={{
                fontFamily: 'Boldonse'
            }} className="font-extrabold text-green-600 uppercase z-0 cursor-pointer text-center text-[13vw]">MY HOBBY</h1>
            <div className="flex justify-center items-center flex-col md:flex-row">
                <div className="flex flex-col p-6 justify-center items-center">
                    <p style={{ fontFamily: "Mea Culpa" }} className="-rotate-12 text-7xl mb-9"><span className='text-8xl'>C</span>laudia</p>
                    <p className="font-light">
                        As an artist, I find joy in exploring different forms of visual storytelling.
                        My passion for art extends from traditional mediums to digital creations,
                        allowing me to express creativity in unique ways.
                    </p>
                </div>
                <div className='rounded-lg h-full w-full md:w-7xl relative md:-top-32 '>
                    <img
                        src="/hobby.png"
                        alt="Claudia Silvia"
                        className="object-cover rounded-lg"
                    />
                </div>

                <div className="flex flex-col p-6 justify-center text-center items-center md:items-end">
                    <p className="font-bold text-2xl mb-6">READING MANGA'S & MANHAWA</p>
                    <p className="font-light text-start md:text-end">
                        These artistic mediums inspire my own creative work. The detailed illustrations
                        and unique storytelling techniques in manga and manhwa have greatly influenced
                        my artistic style and perspective.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hobby
