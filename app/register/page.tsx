import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton, SecondaryButton } from '@/components';
import google from '@/public/assets/google-icon.png';
import Image from "next/image";
import { FormSignupErrors, FormSignupValues } from '@/types';
import { Formik } from 'formik';

const page = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const validateForm = (values: FormSignupValues) => {
        const errors:FormSignupErrors = {};

        if (!values.firstName) {
            errors.firstName = "First name is required";
        } else if (values.firstName.length <= 3) {
            errors.firstName = 'Must be 3 characters or more';
        }

        if (!values.lastName) {
            errors.lastName = "Last name is required";
        } else if (values.lastName.length <= 3) {
            errors.lastName = 'Must be 3 characters or more';
        }

        if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{11}$/.test(values.phone)) {
            errors.phone = "Invalid phone number. Number must be 11 digits";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Password number is required";
        } else if (values.password.length <= 8) {
            errors.password = "Password length must be more than 7"
        }

        if (values.password !== values.confirmPassword) {
            errors.password = "Password does not match!";
        }

        return errors;
    }

    const onSignup = (values: FormSignupValues) => {
        console.log("values: ", values);
        
    }


    return (
        <div className='mt-28 mb-20 flex items-center h-fit justify-center px-3 md:px-0'>
            <section className=' px-3 py-6 h-fit mx-auto w-full md:w-1/2 rectangle'>
                <h1 className='font-semibold text-3xl'>Create an account</h1>

                <p className='text-sm mt-2'> Already have an account? <Link href="/login" className='text-primary'> Login instead </Link> </p>

                {/* <Formik>

                </Formik> */}
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