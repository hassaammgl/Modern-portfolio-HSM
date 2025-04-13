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

        return () => tl.kill(); // cleanup
    }, []);

    useEffect(() => {
        if (!menuTL.current) return;
        isMenuOpen ? menuTL.current.play() : menuTL.current.reverse();
    }, [isMenuOpen]);

    // 🔥 Scroll-based navbar hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current && currentY > 100) {
                // Scroll down → hide navbar
                gsap.to(navRef.current, {
                    y: '-100%',
                    ease: 'power2.out',
                    duration: 0.4,
                });
            } else {
                // Scroll up → show navbar
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
            {/* 🟢 NAVBAR */}
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

            {/* ⚫ FULLSCREEN MENU */}
            <div
                ref={menuContainerRef}
                className={`fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-[60] transition-all duration-500 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                style={{ clipPath: 'circle(0% at 100% 0)' }}
            >
                {/* ❌ CLOSE BUTTON */}
                <button
                    onClick={handleMenuClick}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 z-[70] w-8 h-8"
                >
                    <img src="/icons/close.svg" alt="close icon" className="w-full h-full invert" />
                </button>

                {/* 🔗 NAV LINKS */}
                <div className="flex flex-col items-start justify-center gap-6 pl-12 h-full w-full">
                    {navLinks.map((label) => (
                        <Link
                            key={label}
                            to={label}
                            smooth={true}
                            duration={1200}
                            onClick={handleMenuClick}
                            className="cursor-pointer text-white text-6xl font-semibold hover:opacity-70 transition"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
