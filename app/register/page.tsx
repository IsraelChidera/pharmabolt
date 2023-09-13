import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton, SecondaryButton } from '@/components';
import google from '@/public/assets/google-icon.png';
import Image from "next/image";

const page = () => {
    return (
        <div className='mt-28 mb-20 flex items-center h-fit justify-center px-3 md:px-0'>
            <section className=' px-3 py-6 h-fit mx-auto w-full md:w-1/2 rectangle'>
                <h1 className='font-semibold text-3xl'>Create an account</h1>

                <p className='text-sm mt-2'> Already have an account? <Link href="/register" className='text-primary'> Login instead </Link> </p>

                <Box
                    component="form"
                    className='space-y-6 mt-6'
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label={<span className='text-sm'>Full name </span>}
                            className='w-full'
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            type="email"
                            id="outlined-required"
                            label={<span className='text-sm'>Email address</span>}
                            className='w-full'
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            className='w-full'
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Confirm password"
                            type="password"
                            className='w-full'
                        />
                    </div>
                </Box>

                <CustomButton title="Create account" className='mt-10 py-3 w-full' />
                <SecondaryButton
                    title={
                        <div className='text-primary flex justify-center items-center'>
                            <div className='flex space-x-2'>
                                <Image
                                    src={google}
                                    alt="google icon"
                                    style={{ width: "20px" }}
                                />
                                <span>Sign in with Google</span>
                            </div>
                        </div>
                    }
                    className='mt-4 border py-3 w-full'
                />
            </section>
        </div>
    )
}

export default page