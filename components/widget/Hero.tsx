import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/hero-image.png';

const Hero = () => {
    return (
        <header className='pt-4 mx-auto md:w-5/6'>
            <div className='flex justify-between'>
                <section className='flex items-center'>
                    <div className='space-y-4'>
                        <div className='text-6xl font-bold'>
                            <span>Your health is</span> <br />
                            <span className='text-primary'>our priority</span>
                        </div>

                        <p>
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