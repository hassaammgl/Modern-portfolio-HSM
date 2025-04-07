import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
    const loaderRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            loaderRef.current,
            { height: '0%' },
            { height: '100%', duration: 0.8, ease: 'power3.inOut' }
        );
        tl.fromTo(
            textRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        tl.to(textRef.current, {
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: 'power1.out',
        });
        tl.to(loaderRef.current, {
            height: '0%',
            duration: 1,
            ease: 'power3.inOut',
        });

        return () => tl.kill();
    }, []);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 bg-black flex justify-center items-center z-[9999]"
        >
            <h1
                ref={textRef}
                className="text-white text-4xl md:text-6xl font-extrabold tracking-wider"
            >
                Loading...
            </h1>
        </div>
    );
};

export default Loader;
