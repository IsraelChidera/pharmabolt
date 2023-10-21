'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { CustomButton, SecondaryButton } from '@/components';
import google from '@/public/assets/google-icon.png';
import Image from "next/image";
import { FormSignupErrors, FormSignupValues } from '@/types';
import { Formik, Form } from 'formik';
import { auth, provider } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const page = () => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useRouter();

    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const validateForm = (values: FormSignupValues) => {
        const errors: FormSignupErrors = {};

        if (!values.fullName) {
            errors.fullName = "First name is required";
        } else if (values.fullName.length <= 3) {
            errors.fullName = 'Must be 3 characters or more';
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

    const onSignup = async (values: any) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Success")
                setLoading(false);
                setSuccess(true);
                navigate.push("/cart");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                setLoading(false);
            })

        const currentUsers: any = auth.currentUser;

        if (success) {
            await updateProfile(currentUsers, {
                displayName: values.fullName,

            }).then(() => {
                console.log("success updtae")
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            })
        }
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

    const handleLoginWithGoogleRedirect = async () => {
        try {
            await signInWithRedirect(auth, provider);
        } catch (error: any) {
            setErrorMsg(error.message);
        }
    }

    return (
        <div className='mt-28 mb-20 flex items-center h-fit justify-center px-3 md:px-0'>
            <section className=' px-3 py-6 h-fit mx-auto w-full md:w-1/2 rectangle'>
                <h1 className='font-semibold text-3xl'>Create an account</h1>

                <p className='text-sm mt-2'> Already have an account? <Link href="/login" className='text-primary'> Login instead </Link> </p>

                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values) => onSignup(values)}
                >
                    {
                        ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }:
                            {
                                values: FormSignupValues, errors: any, touched: any,
                                handleChange: any, handleSubmit: any, isSubmitting: boolean
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
                                                type="text"
                                                id="outlined-required fullName"
                                                name="fullName"
                                                onChange={handleChange}
                                                value={values.fullName}
                                                label={<span className='text-sm'>Full name </span>}
                                                className='w-full'
                                            />
                                            <p className='text-xs text-red-700'>
                                                {errors.fullName && touched.fullName && errors.fullName}
                                            </p>
                                        </div>

                                        <div>
                                            <TextField
                                                required
                                                type="email"
                                                id="outlined-required email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email}
                                                label={<span className='text-sm'>Email address</span>}
                                                className='w-full'
                                            />
                                            <p className='text-xs text-red-700'>
                                                {errors.email && touched.email && errors.email}
                                            </p>
                                        </div>

                                        <div>
                                            <TextField
                                                required
                                                id="outlined-password-input password"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                label="Password"
                                                type="password"
                                                className='w-full'
                                            />

                                            <p className='text-xs text-red-700'>
                                                {errors.password && touched.password && errors.password}
                                            </p>
                                        </div>

                                        <div>
                                            <TextField
                                                required
                                                id="outlined-password-input confirmPassword"
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                value={values.confirmPassword}
                                                label="Confirm password"
                                                type="password"
                                                className='w-full'
                                            />

                                            <p className='text-xs text-red-700'>
                                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                            </p>
                                        </div>
                                    </div>

                                    <CustomButton
                                        type="submit"
                                        title={loading ? "Creating Account" : "Create Account"}
                                        className='disabled:opacity-65 mt-10 py-3 w-full'
                                    />

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
                                                <span>Sign in with Google</span>
                                            </div>
                                        </div>
                                    }
                                    onClick={handleLoginWithGoogle}
                                    className='hidden md:block mt-4 border py-3 w-full'
                                />

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
                                    onClick={handleLoginWithGoogleRedirect}
                                    className='md:hidden block mt-4 border py-3 w-full'
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