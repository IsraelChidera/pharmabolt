import Image from 'next/image';
import React from 'react';
import { CustomButton } from '..';
import book from '../../public/assets/sign-up.png';
import circle from '../../public/assets/circle2.png';
import circle2 from '../../public/assets/circle.png';

const CreateAccount = () => {
    return (
        <section className='mt-40 mx-auto md:w-5/6 relative'>
            <Image src={circle} alt="sign up image" className='absolute left-0 bottom-0' />
            <div className='flex justify-between space-x-20'>
                <div className='relative'>
                    <Image src={book} alt="sign up image" />
                    <Image src={circle2} alt="sign up image" className='md:hidden absolute left-0 bottom-0' />
                </div>

                <section className='flex items-end justify-end'>
                    <div className='space-y-4 text-right'>
                        <div className='text-5xl font-bold relative'>
                            <span>Get rewarded for</span> <br />
                            <span>sticking with us</span> <br />
                            <span>It's totally free!!!</span>
                        </div>

                        <p className='text-base '>
                            Enjoy discounts on medication and consultations, 
                            free delivery, etc when you create an account with us.
                        </p>

                        <CustomButton
                            title="Create an account"
                            className='px-12 py-3 text-xs'
                        // onClick={handleClick}
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CreateAccount