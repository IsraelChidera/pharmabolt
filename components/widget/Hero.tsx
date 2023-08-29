import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/hero-image.png';
import line from '../../public/assets/line.svg';

const Hero = () => {
    return (
        <header className='pt-4 mx-auto md:w-5/6'>
            <div className='flex justify-between'>
                <section className='flex items-center'>
                    <div className='space-y-4'>
                        <div className='text-6xl font-bold relative'>
                            <span>Your health is</span> <br />
                            <span className='text-primary'>our priority</span>

                            <Image src={line} alt="line icon" className='absolute top-5 right-0'/>
                        </div>

                        <p className='text-xl w-3/4'>
                            Get your medication delivered at your door
                            without delay or hassle.
                        </p>

                        <button> Place an order </button>
                    </div>
                </section>

                <div>
                    <Image src={hero} alt="hero image" className='hero-image' />
                </div>
            </div>
        </header>
    )
}

export default Hero