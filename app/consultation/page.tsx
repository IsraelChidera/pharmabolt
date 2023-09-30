'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";

const page = () => {

    const navigate = useRouter();

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleJoinWaitlist = () => {
        // You can add your logic here to handle the email submission, e.g., sending it to a server.
        // For this example, we'll simply set a flag to indicate submission.
        setIsSubmitted(true);
    };

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
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 px-3 md:text-base text-sm py-2 rounded-md mr-2"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button
                                onClick={handleJoinWaitlist}
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