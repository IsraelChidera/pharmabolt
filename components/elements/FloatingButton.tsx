'use client'

import React, { useState, useEffect } from 'react';
// import { BsArrowUp } from 'react-icons/bs';

const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        // Calculate the height of the first 100vh in pixels
        const first100vh = window.innerHeight * 100 / 100;

        // Check if the scroll position exceeds the first 100vh
        if (window.scrollY > first100vh) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-4 md:right-10 right-4 p-4 md:p-6 z-10 drop-shadow-2xl rounded-full bg-sky-600 text-white ${showButton ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            {/* <BsArrowUp /> */}
            F
        </button>
    );
};

export default FloatingButton;
