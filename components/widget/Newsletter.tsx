import React from 'react'
import { CustomButton } from '..'

const Newsletter = () => {
    return (
        <section style={{ background: "#E2F2FF" }} className='mt-20 py-16'>
            <div className='w-1/3 mx-auto text-center'>
                <h3 className='text-2xl font-bold'>
                    Join our e-mail list
                </h3>
                <p className='text-sm mt-2'>
                    Subscribe to our email list and be the first to get updates and news from us!
                </p>
            </div>

            <form className='mt-6 w-1/2 mx-auto '>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Enter your email address'
                        className='py-4 pl-4 text-sm w-full '
                        style={{ color: "#C7C7C7" }}
                    />
                    <CustomButton
                        title="Subscribe"
                        className='bg-white z-20 rounded py-2 px-4 text-xs absolute top-2 right-3'
                    />
                </div>

            </form>
        </section>
    )
}

export default Newsletter