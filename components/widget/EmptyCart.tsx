import React from 'react';
import { useRouter } from 'next/navigation';

const EmptyCart = () => {

    const navigate = useRouter();
    const ReturnToHome = () => {
        navigate.push("/shop")
    }

    return (
        <div className=" h-screen flex items-center justify-center">
            <div className=" text-center sm:px-0 px-3 ">
                <div>
                    <h1 className="md:text-3xl text-2xl font-bold mb-6">Your Cart is Waiting!</h1>
                    <div className="text-sm flex items-center justify-center md:text-lg mb-4">
                        <p className=' w-1/2'>
                            It's time to fill your cart with amazing products and services.
                            Explore our offerings and start shopping to your heart's content.
                        </p>
                    </div>
                    <button onClick={ReturnToHome} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart