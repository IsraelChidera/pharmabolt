import Image from 'next/image';
import React from 'react';
import CustomButton  from '../../elements/CustomButton';
import book from '../../../public/assets/sign-up.png';
import circle from '../../../public/assets/circle2.png';
import circle2 from '../../../public/assets/circle.png';

const CreateAccount = () => {
    return (
        <section className='mt-20 border-t pt-10 md:mt-40 mx-auto md:w-5/6 relative'>
            <Image src={circle} alt="sign up image" className=' absolute left-0 bottom-0' />
            <div className='md:flex flex flex-col md:flex-row justify-between md:space-x-20'>
                <div className='mt-10 md:mt-0 md:order-1 order-2 relative'>
                    <Image src={book} alt="sign up image" />
                    <Image src={circle2} alt="sign up image" className='hidden absolute left-0 bottom-0' />
                </div>

                <section className='md:order-1 md:flex md:items-end justify-end'>
                    <div className='space-y-4 md:text-right text-center'>
                        <div className='text-2xl md:text-5xl text-center md:text-right font-bold relative'>
                            <span>Get rewarded for</span> <br />
                            <span>sticking with us</span> <br />
                            <span>It's totally free!!!</span>
                        </div>

                        <p className='md:text-base text-sm p-2'>
                            Enjoy discounts on medication and consultations, 
                            free delivery, etc when you create an account with us.
                        </p>

                        <CustomButton
                            title="Create an account"
                            className='px-12 py-3 text-xs'                        
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CreateAccount