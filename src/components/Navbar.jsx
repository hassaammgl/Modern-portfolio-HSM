// import React, { useState, useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(true);
//     const menuButtonRef = useRef(null);
//     const menuContainerRef = useRef(null);
//     const menuTL = useRef(null);

//     const handleMenuClick = () => {
//         setIsMenuOpen(prev => !prev);
//     };

//     // ✨ Timeline animation using clip-path only
//     useGSAP(() => {
//         const tl = gsap.timeline({ paused: true });

//         tl.to(menuButtonRef.current, {
//             rotation: 180,
//             scale: 0.8,
//             ease: 'power2.inOut',
//             transformOrigin: 'center center',
//             duration: 0.3,
//         }).to(
//             menuContainerRef.current,
//             {
//                 clipPath: 'circle(120% at 50% 50%)',
//                 ease: 'power2.inOut',
//                 duration: 0.6,
//             },
//             0 // Start at the same time
//         );

//         menuTL.current = tl;
//     }, []);

//     // 🔁 Toggle animation with state
//     useEffect(() => {
//         if (!menuTL.current) return;

//         if (isMenuOpen) {
//             menuTL.current.play();
//         } else {
//             menuTL.current.reverse();
//         }
//     }, [isMenuOpen]);

//     const navLinks = [
//         { href: '#', label: 'Home' },
//         { href: '#', label: 'About' },
//         { href: '#', label: 'Products' },
//         { href: '#', label: 'Contact' },
//     ];

//     return (
//         <>
//             {/* <nav className="flex justify-between p-4 z-50 relative">
//                 <h1>
//                     <a className={`font-extrabold text-3xl ${isMenuOpen ? "text-white" : ""}`} href="/">
//                         MGL<span className="text-green-600">.</span>
//                     </a>
//                 </h1>
//                 <button ref={menuButtonRef} onClick={handleMenuClick}>
//                     <img
//                         src={isMenuOpen ? '/icons/close.svg' : '/icons/menu.svg'}
//                         alt="menu-icon"
//                         className={isMenuOpen ? 'invert-100' : ""}
//                     />
//                 </button>
//             </nav>

//             <div
//                 ref={menuContainerRef}
//                 id="menu"
//                 className="bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
//                 style={{
//                     clipPath: 'circle(0% at 100% 0)',
//                 }}
//             >
//                 <div className="w-full h-full flex flex-col items-start justify-center gap-4 pl-10">
//                     {navLinks.map((link, index) => (
//                         <a key={index} href={link.href} className="text-white text-6xl">
//                             {link.label}
//                         </a>
//                     ))}
//                 </div>
//             </div> */}
//             <nav className="flex justify-between p-4 z-[50] fixed top-0 left-0 w-full">
//                 <h1>
//                     <a className={`font-extrabold text-3xl ${isMenuOpen ? "text-white" : ""}`} href="/">
//                         MGL<span className="text-green-600">.</span>
//                     </a>
//                 </h1>
//                 <button ref={menuButtonRef} onClick={handleMenuClick}>
//                     <img
//                         src={isMenuOpen ? '/icons/close.svg' : '/icons/menu.svg'}
//                         alt="menu-icon"
//                         className={isMenuOpen ? 'invert-100' : ""}
//                     />
//                 </button>
//             </nav>

//             <div
//                 ref={menuContainerRef}
//                 id="menu"
//                 className={`bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[60] transition-all duration-500 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
//                     }`}
//                 style={{
//                     clipPath: 'circle(0% at 100% 0)',
//                 }}
//             >
//                 <div className="w-full h-full flex flex-col items-start justify-center gap-4 pl-10">
//                     {navLinks.map((link, index) => (
//                         <a key={index} href={link.href} className="text-white text-6xl">
//                             {link.label}
//                         </a>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const menuContainerRef = useRef(null);
    const menuTL = useRef(null);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        // Button animation
        tl.to(menuButtonRef.current, {
            rotation: 180,
            scale: 0.8,
            ease: 'power2.inOut',
            transformOrigin: 'center center',
            duration: 0.3,
        });

        // Clip path animation (smooth expansion from corner to center)
        tl.to(
            menuContainerRef.current,
            {
                clipPath: 'circle(120% at 50% 50%)',
                ease: 'power2.inOut',
                duration: 0.6,
            },
            0 // Start at same time
        );

        menuTL.current = tl;
    }, []);

    // Play/reverse on toggle
    useEffect(() => {
        if (!menuTL.current) return;
        isMenuOpen ? menuTL.current.play() : menuTL.current.reverse();
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'About' },
        { href: '#', label: 'Products' },
        { href: '#', label: 'Contact' },
    ];

    return (
        <>
            {/* 🟢 NAVBAR */}
            <nav className="flex justify-between items-center p-4 z-[40] fixed top-0 left-0 w-full backdrop-blur-3xl">
                <h1>
                    <a
                        className={`font-extrabold text-3xl transition-colors duration-300 ${isMenuOpen ? 'text-white' : ''
                            }`}
                        href="/"
                    >
                        MGL<span className="text-green-600">.</span>
                    </a>
                </h1>
                {!isMenuOpen && (
                    <button ref={menuButtonRef} onClick={handleMenuClick}>
                        <img
                            src="/icons/menu.svg"
                            alt="menu-icon"
                            className="w-8 h-8 transition duration-300"
                        />
                    </button>
                )}
            </nav>

            {/* ⚫ FULLSCREEN MENU */}
            <div
                ref={menuContainerRef}
                id="menu"
                className={`bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[60] transition-all duration-500 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                style={{
                    clipPath: 'circle(0% at 100% 0)', // Initial state
                }}
            >
                {/* 🔴 CLOSE BUTTON INSIDE MENU */}
                <button
                    onClick={handleMenuClick}
                    className="absolute top-4 right-4 z-[70]"
                    ref={menuButtonRef}
                >
                    <img
                        src="/icons/close.svg"
                        alt="close-icon"
                        className="w-8 h-8 invert transition duration-300"
                    />
                </button>

                {/* 🔗 NAV LINKS */}
                <div className="w-full h-full flex flex-col items-start justify-center gap-6 pl-12">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-white text-6xl font-semibold hover:opacity-70 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;
