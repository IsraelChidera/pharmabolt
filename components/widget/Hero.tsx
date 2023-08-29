import Image from 'next/image';
import React from 'react';
import hero from '../../public/assets/hero-image.png';
import line from '../../public/assets/line.svg';

const Hero = () => {
    return (
        <header className='mx-auto md:w-5/6'>
            <div className='flex justify-between'>
                <section className='flex items-center'>
                    <div className='space-y-4'>
                        <div className='text-6xl font-bold relative'>
                            <span>Your health is</span> <br />
                            <span className='text-primary'>our priority</span>

                            <Image src={line} alt="line icon" className='absolute top-5 right-0' />
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

            <div className='md:grid grid-cols-3 gap-x-6 gap-y-6 mt-14 mb-6'>
                <div className='rectangle'>
                    <h3 className='font-bold text-xl'>
                        Consult a professional
                    </h3>

                    <p className='pt-2'>
                        Book an appointment with
                        an expert and be attended
                        to in minutes.
                    </p>
                </div>

                <div className='rectangle'>
                    <h3 className='font-bold text-xl'>
                        Upload your prescription
                    </h3>

                    <p className='pt-2'>
                        Have a prescription from a doctor?
                        Upload it now and we will
                        deliver it to you.
                    </p>
                </div>

                <div className='rectangle'>
                    <h3 className='font-bold text-xl'>
                        Purchase your medication
                    </h3>

                    <p className='pt-2'>
                        Place an order for your medication 
                        and it will be available 
                        in no time.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Hero