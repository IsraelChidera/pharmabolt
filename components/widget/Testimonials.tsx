'use client';
import React, {useState, useReducer} from 'react';

const Testimonials = () => {

    const [emailValid, setEmailValid] = useState(false);

    const emailReducer = (state:any, action:any) => {
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
        </section>
    )
}

export default Testimonials