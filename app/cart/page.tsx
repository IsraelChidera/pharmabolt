'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import product1 from '../../public/assets/product.png';
import deleteIcon from '../../public/assets/delete-icon.png';
import { CustomButton } from '@/components';
import { useRouter } from "next/navigation";

const page = () => {

    const navigate = useRouter();
    return (
        <section className="px-3 md:mx-auto md:max-w-6xl mt-20 pb-10">
            <div className="flex items-end justify-between">
                <div>
                    <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Cart {">"}</p>
                </div>


                <Link prefetch href="/shop" className="text-xs underline underline-offset">
                    Continue shopping
                </Link>
            </div>

            <div className='mt-20 md:grid grid-cols-2 md:space-x-40'>
                <div>
                    <section className='flex border-b pb-10 h-fit justify-between space-x-10'>
                        <div className='flex space-x-3'>
                            <div className='border rounded-md'>
                                <Image style={{ width: "142px", height: "142px" }} src={product1} alt="product in cart" />
                            </div>

                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-sm'> Blood Test Strip </h3>
                                    <p className='text-xs mt-2' style={{ color: "#039E00" }}> Available </p>
                                </div>

                                <div className='text-xs border p-2 flex space-x-4 items-center mt-6 md:mt-4'>
                                    <p style={{ color: "#D0D0D0" }}>Quantity</p>
                                    <div className='flex items-center space-x-5'>
                                        <button className='font-bold'> - </button>
                                        <p> 1 </p>
                                        <button className='font-bold'> + </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' text-sm flex flex-col justify-between'>
                            <p> NGN 7 950 </p>

                            <div className='flex items-center space-x-2 text-primary'>
                                <Image src={deleteIcon} alt="delete icon" />
                                <p className='text-xs'>Remove</p>
                            </div>
                        </div>
                    </section>

                    <section className='mt-20 pb-10 border-b flex h-fit justify-between space-x-10'>
                        <div className='flex space-x-3'>
                            <div className='border rounded-md'>
                                <Image style={{ width: "142px", height: "142px" }} src={product1} alt="product in cart" />
                            </div>

                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-sm'> Blood Test Strip </h3>
                                    <p className='text-xs mt-2' style={{ color: "#039E00" }}> Available </p>
                                </div>

                                <div className='text-xs border p-2 flex space-x-4 items-center mt-6 md:mt-4'>
                                    <p style={{ color: "#D0D0D0" }}>Quantity</p>
                                    <div className='flex items-center space-x-5'>
                                        <button className='font-bold'> - </button>
                                        <p> 1 </p>
                                        <button className='font-bold'> + </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' text-sm flex flex-col justify-between'>
                            <p> NGN 7 950 </p>

                            <div className='flex space-x-2 items-center text-primary'>
                                <Image src={deleteIcon} alt="delete icon" />
                                <p className='text-xs'>Remove</p>
                            </div>
                        </div>
                    </section>
                </div>

                <aside className='mt-20 md:mt-0 md:mb-0 mb-20'>
                    <ul>
                        <div className='flex justify-between'>
                            <p> Products </p>

                            <p className='font-bold'> NGN 13,738 </p>
                        </div>

                        <div className='mt-4 flex justify-between'>
                            <p> Delivery </p>

                            <p className='font-bold'> NGN 1,200 </p>
                        </div>

                        <p className='mt-3 text-primary border-b text-xs pb-8 underline'>
                            Tap here to edit delivery address
                        </p>

                        <div className='mt-6 flex justify-between'>
                            <p> Total </p>

                            <p className='font-bold'> NGN 14,938</p>
                        </div>

                        <div className='mt-10'>
                            <CustomButton 
                                className='w-full py-3' 
                                title="Proceed to Checkout"  
                                onClick={() => navigate.push("/cart/checkout")}
                            />
                        </div>
                    </ul>
                </aside>
            </div>
        </section>
    )
}

export default page