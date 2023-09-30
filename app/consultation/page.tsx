'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Form, Formik } from 'formik';
import { TextField } from '@mui/material';



const page = () => {


    type ValidateMailProp = {
        email: string
    }

    type ValidateMailErrorProp = {
        email: string
    }

    const navigate = useRouter();

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues: ValidateMailProp = {
        email: "",
    }

    const validateForm = (values: ValidateMailProp) => {
        const errors: ValidateMailProp = {} as ValidateMailProp

        if (!values.email) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    }


    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);

    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const onLogin = (values: ValidateMailProp) => {
        console.log(values);
    }

    return (
        <div className=" h-screen flex items-center justify-center">
            <div className=" text-center sm:px-0 px-3 ">
                <h1 className="md:text-3xl text-2xl font-bold mb-6">Consultation</h1>
                <p className="text-sm md:text-lg mb-4">
                    We're working hard to bring you the consultation feature!
                </p>
                {!isSubmitted ? (
                    <div>
                        <p className="text-sm md:text-lg mb-4">
                            Join our waitlist to be the first to know when it's available.
                        </p>
                        <div className="md:flex space-y-4 md:space-y-0 justify-center">

                            <Formik
                                initialValues={initialValues}
                                validate={validateForm}
                                onSubmit={(values) => onLogin(values)}
                            >

                                {
                                    (
                                        { values, errors, touched, handleChange, handleSubmit }:
                                            {
                                                values: ValidateMailProp, errors: any,
                                                touched: any, handleChange: any, handleSubmit: any
                                            }
                                    ) => (
                                        <Form>
                                            <TextField
                                                type="email"
                                                placeholder="Your Email"
                                                className="border border-gray-300 px-3 md:text-base text-sm py-2 rounded-md mr-2"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                            />
                                        </Form>
                                    )
                                }
                            </Formik>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 px-3 md:text-base text-sm py-2 rounded-md mr-2"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </form>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white md:text-base text-sm px-4 py-2 rounded-md"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className=" mt-4">
                        <p className='text-sm md:text-lg'>
                            Thank you for joining our waitlist!
                            We'll keep you updated on the
                            latest developments.
                        </p>

                        <button
                            onClick={() => navigate.push("/")}
                            className="bg-blue-500 mt-4 text-white md:text-base text-sm px-4 py-2 rounded-md"
                        >
                            Return to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default page