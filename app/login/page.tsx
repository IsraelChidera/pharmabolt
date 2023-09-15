'use client'


import React, { useState } from 'react';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { CustomButton, SecondaryButton } from '@/components';
import google from '@/public/assets/google-icon.png';
import Image from "next/image";
import { Field, Form, Formik } from 'formik';
import { FormLoginErrors, FormLoginValues } from '@/types';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '@/firebase';
import { useRouter } from 'next/navigation';

const page = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useRouter();

    const initialValues: FormLoginValues = {
        email: "",
        password: "",
    }

    const validateForm = (values: FormLoginValues) => {
        const errors: FormLoginErrors = {}

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

        return errors;
    }

    const onLogin = async (values: any) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("successful login");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
            });
    }

    const handleLoginWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                console.log("success");
                navigate.push("/")

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("success");
                console.log(credential);

                // ...
            });
    }

    return (
        <div className='mt-28 mb-20 flex items-center h-fit justify-center px-3 md:px-0'>
            <section className=' px-3 py-6 h-fit mx-auto w-full md:w-1/2 rectangle'>
                <h1 className='font-semibold text-3xl'>Sign in</h1>

                <p className='text-sm mt-2'> Don't have an account? <Link href="/register" className='text-primary'> Create an account instead </Link> </p>

                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values) => onLogin(values)}
                >
                    {
                        (
                            { values, errors, touched, handleChange, handleSubmit }:
                                {
                                    values: FormLoginValues, errors: FormLoginErrors,
                                    touched: any, handleChange: any, handleSubmit: any
                                }
                        ) => (
                            <div>
                                <Form>

                                    <p className='my-4 text-red-700 text-xs'>
                                        {errorMsg}
                                    </p>

                                    <div
                                        className='space-y-6 mt-6'

                                    >
                                        <div>
                                            <TextField
                                                required
                                                type="email"
                                                id="outlined-required email"
                                                name="email"
                                                value={values.email}
                                                label="Email address"
                                                className={`w-full text-black ${errors.email && 'border border-red-700'}`}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <TextField
                                                required
                                                id="outlined-password-input password"
                                                name="password"
                                                value={values.password}
                                                label="Password"
                                                type="password"
                                                className={`w-full ${errors.password && touched.password && errors.password && 'border border-red-700'}`}
                                                onChange={handleChange}
                                            />

                                            <p className='text-xs text-red-700'>
                                                {errors.password && touched.password && errors.password}
                                            </p>
                                        </div>
                                    </div>

                                    <CustomButton type="submit" title="Sign in" className=' mt-10 py-3 w-full' />

                                </Form>

                                <SecondaryButton
                                    title={
                                        <div className='text-primary flex justify-center items-center'>
                                            <div className='flex space-x-2'>
                                                <Image
                                                    src={google}
                                                    alt="google icon"
                                                    style={{ width: "20px" }}
                                                />
                                                <span>Continue with Google</span>
                                            </div>
                                        </div>
                                    }
                                    onClick={handleLoginWithGoogle}
                                    className='mt-4 border py-3 w-full'
                                />
                            </div>
                        )
                    }
                </Formik>

            </section>
        </div>
    )
}

export default page