'use client'

import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/hero-image.png';
import line from '../../public/assets/line.svg';
import CustomButton from '../elements/CustomButton';

const Hero = () => {

    const handleClick = () => {

    }

    return (
        <header className='mx-auto md:w-5/6'>
            <div className='md:flex justify-between'>
                <section className='md:flex items-center'>
                    <div className='md:space-y-4 md:pt-0 '>
                        <div className='flex justify-center md:hidden'>
                            <Image src={line} alt="line icon" style={{ width: "255px", height:"255px" }} />
                        </div>

                        <div className='text-4xl text-center md:text-left md:text-6xl font-bold relative'>
                            <span>Your health is</span> <br />
                            <span className='text-primary'>our priority</span>

                            <Image
                                src={line}
                                alt="line icon"
                                className='md:block hidden absolute top-5 right-0'
                            />
                        </div>

                        <p className='md:pt-0 pt-2 text-center md:text-left md:text-xl md:w-3/4'>
                            Get your medication delivered at your door
                            without delay or hassle.
                        </p>

                        <div className='mt-2 md:mt-0 flex justify-center md:block'>
                            <CustomButton title="Place an order" className='px-12 py-3' onClick={handleClick} />
                        </div>
                    </div>
                </section>

                <div>
                    <Image src={hero} alt="hero image" className='hero-image' />
                </div>
            </div>

            <div className='mx-3 md:mx-0 md:grid grid-cols-3 gap-x-6 space-y-10 md:space-y-0 mt-14 mb-6'>
                <div className='rectangle w-fit '>
                    <h3 className='font-bold text-lg'>
                        Consult a professional
                    </h3>

                    <p className='pt-2 text-sm'>
                        Book an appointment with
                        an expert and be attended
                        to in minutes.
                    </p>

                    <CustomButton title="Book now" className='px-4 py-1 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='rectangle w-fit'>
                    <h3 className='font-bold text-lg'>
                        Upload your prescription
                    </h3>

                    <p className='pt-2 text-sm'>
                        Have a prescription from a doctor?
                        Upload it now and we will
                        deliver it to you.
                    </p>

                    <CustomButton title="Upload now" className='px-4 py-1 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='rectangle w-fit'>
                    <h3 className='font-bold text-lg'>
                        Purchase your medication
                    </h3>

                    <p className='pt-2 text-sm'>
                        Place an order for your medication
                        and it will be available
                        in no time.
                    </p>

                    <CustomButton title="Place an order" className='px-4 py-1 text-xs mt-4' onClick={handleClick} />
                </div>
            </div>
        </header>
    )
}

export default Hero