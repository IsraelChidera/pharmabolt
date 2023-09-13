'use client'

import Image from 'next/image'
import React from 'react'
import CustomButton  from '../../elements/CustomButton';
import book from '../../../public/assets/book.png';

const BookConsultation = () => {

    const handleClick = () => {

    }

    return (
        <section className='mt-20 border-t pt-10 md:mt-40 mx-auto md:w-5/6'>
            <div className='md:flex justify-between'>
                <section className='flex items-center'>
                    <div className='space-y-4 '>
                        <div className='text-2xl md:text-5xl text-center md:text-left font-bold relative'>
                            <span>Have specific</span> <br />
                            <span>concerns about</span> <br />
                            <span>your health?</span>
                        </div>

                        <p className='text-center md:text-left text-xs md:text-base mx-auto md:mx-0 w-5/6 md:w-3/4'>
                            Reach out to us or book a consultation
                            with a professional and have your
                            questions answered.
                        </p>                      

                        <div className='flex justify-center md:block'>
                            <CustomButton
                                title="Book a consultation"
                                className='px-12 py-3 text-xs'
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </section>

                <div className='mt-6 mx-10 md:mx-0'>
                    <Image src={book} alt="book consultation image" />
                </div>
            </div>
        </section>
    )
}

export default BookConsultation