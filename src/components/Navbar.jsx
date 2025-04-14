import React, { useState, useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuContainerRef = useRef(null);
    const menuButtonRef = useRef(null);
    const menuTL = useRef(null);
    const lastScrollY = useRef(0);

    const navLinks = useMemo(
        () => ['Home', 'About', 'Hobby', 'Experience', 'Projects', 'Skills', 'Contact'],
        []
    );

    const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        tl.to(menuButtonRef.current, {
            rotation: 180,
            scale: 0.8,
            ease: 'power2.inOut',
            duration: 0.3,
            transformOrigin: 'center',
        });

        tl.to(
            menuContainerRef.current,
            {
                clipPath: 'circle(120% at 50% 50%)',
                ease: 'power2.inOut',
                duration: 0.3,
            },
            0
        );

        menuTL.current = tl;

        return () => tl.kill();
    }, []);

    useEffect(() => {
        if (!menuTL.current) return;
        isMenuOpen ? menuTL.current.play() : menuTL.current.reverse();
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current && currentY > 100) {
                gsap.to(navRef.current, {
                    y: '-100%',
                    ease: 'power2.out',
                    duration: 0.4,
                });
            } else {
                gsap.to(navRef.current, {
                    y: '0%',
                    ease: 'power2.out',
                    duration: 0.4,
                });
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-[40] bg-black transition-transform "
            >
                <a
                    href="/"
                    className={`font-extrabold text-3xl transition-colors duration-300 text-white`}
                >
                    MGL<span className="text-green-600">.</span>
                </a>

                {!isMenuOpen && (
                    <button
                        ref={menuButtonRef}
                        onClick={handleMenuClick}
                        aria-label="Open menu"
                        className="w-8 h-8 transition duration-300"
                    >
                        <img src="/icons/menu.svg" alt="menu icon" className="w-full h-full mix-blend-difference" />
                    </button>
                )}
            </nav>
            <div
                ref={menuContainerRef}
                className={`fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-[60] transition-all duration-500 ${isMenuOpen
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                    }`}
                style={{
                    clipPath: isMenuOpen
                        ? 'circle(150% at 95% 5%)'
                        : 'circle(0% at 95% 5%)',
                }}
            >
                <button
                    onClick={handleMenuClick}
                    aria-label="Close menu"
                    className="absolute top-6 right-6 z-[70] w-10 h-10 md:top-8 md:right-8 md:w-12 md:h-12 hover:opacity-70 transition-opacity"
                >
                    <img
                        src="/icons/close.svg"
                        alt="Close menu"
                        className="w-full h-full invert"
                    />
                </button>

                <div className="flex flex-col items-start justify-center gap-4 md:gap-6 h-full w-full px-4 md:px-8 lg:pl-16">
                    {navLinks.map((label) => (
                        <Link
                            key={label}
                            to={label}
                            smooth={true}
                            duration={1200}
                            onClick={handleMenuClick}
                            className="cursor-pointer text-white text-4xl md:text-5xl lg:text-6xl font-medium hover:opacity-70 transition-opacity w-full max-w-7xl mx-auto"
                        >
                            <span className="inline-block py-2 md:py-3">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
