'use client';
import Image from 'next/image';
import React, { useState, useReducer } from 'react';
import leftArrow from '/public/assets/swipe-left-icon.svg';
import rightArrow from '/public/assets/swipe-right-icon.svg';
import testimonialImage from '/public/assets/testimonial-image.webp';


const Testimonials = () => {

    const [emailValid, setEmailValid] = useState(false);

    const emailReducer = (state: any, action: any) => {
        const isValidEmail = true;

        setEmailValid(isValidEmail);

        return action;

    }

    const [email, setEmail] = useReducer(emailReducer, "");
    return (
        <section className='border-t pt-10 mt-32 md:mt-40'>
            <div className='md:w-1/2 w-5/6 mx-auto text-center'>
                <h3 className='text-2xl font-bold'>
                    Enjoy and benefit from true care
                    and great service delivery with <span className='text-primary'> no boundaries. </span>
                </h3>
                <p className='text-sm mt-2'>
                    Read some of our customer reviews and feedback.
                </p>
            </div>

            <div className='mt-10 mx-auto w-full'>
                <div className='grid grid-cols-6 gap-x-10'>
                    <div className='flex justify-end'>
                        <Image src={leftArrow} alt="left swipe icon" />
                    </div>

                    <div className='border-4 p-1 rounded-2xl border-dashed col-span-4'>
                        <div 
                            style={{ background: "#008bff" }} 
                            className="text-white py-10 px-8 flex 
                            justify-between items-center space-x-10 rounded-2xl"
                        >
                            <div>
                                <Image src={testimonialImage} alt="Profile of testimonial" />
                            </div>

                            <div>
                                <div className='flex justify-between items-end'>
                                    <h3 className='text-2xl font-bold'> Mrs. Chiamaka Edozie 2 days ago </h3>
                                    <p className='text-xs'> 2 days ago </p>
                                </div>

                                <p className='pt-2 text-xl'>
                                    I couldn't be happier with the service delivery.
                                    Got my son's medication and everything was
                                    well packaged and sealed.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-start'>
                        <Image src={rightArrow} alt="right swipe icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials