"use client"

import Image from 'next/image';
import React from 'react';
import product1 from '../../public/assets/product.png';
import product2 from '../../public/assets/product2.png';
import product3 from '../../public/assets/product3.png';
import product4 from '../../public/assets/product4.png';
import product5 from '../../public/assets/product5.png';
import product6 from '../../public/assets/product6.png';
import product7 from '../../public/assets/product7.png';
import product8 from '../../public/assets/product8.png';

import { CustomButton, SecondaryButton } from '..';


const Products = () => {

    const handleClick = () => {

    }

    return (
        <section className='mt-40 mx-auto md:w-5/6'>
            <h2 className='text-2xl font-bold text-center'>
                Browse medication and products
            </h2>

            <div className='pt-6 mt-10 md:grid grid-cols-4 gap-x-6 gap-y-10'>
                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <div className='absolute top-0 left-0' style={{ background: "#fffcbc" }}>
                            <p className='text-sm font-bold p-2'> Popular </p>
                        </div>
                        <Image src={product1} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Acebrofylline </p>
                    <p className='text-xs'> NGN 7 850 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <div className='absolute top-0 left-0' style={{ background: "#fffcbc" }}>
                            <p className='text-sm font-bold p-2'> Popular </p>
                        </div>
                        <Image src={product2} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Blood Test Strip </p>
                    <p className='text-xs'> NGN 7 950 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product3} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Glucometer </p>
                    <p className='text-xs'> NGN 12 590 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product4} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Insulin Syringe </p>
                    <p className='text-xs'> NGN 6 000 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product5} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Inhaler </p>
                    <p className='text-xs'> NGN 2 850 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product6} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Plasminogen ... </p>
                    <p className='text-xs'> NGN 27 850 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product7} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Daibamit </p>
                    <p className='text-xs'> NGN 6 435 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

                <div className='flex flex-col justify-around'>
                    <div className='rectangle2 bg-white relative'>
                        <Image src={product7} alt="product" />
                    </div>

                    <p className='font-bold pt-2'> Metformin </p>
                    <p className='text-xs'> NGN 5 788 </p>

                    <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' onClick={handleClick} />
                </div>

            </div>

            <div className='mx-auto mt-10 flex items-center justify-center'>
                {/* <CustomButton  title="View all products" className='border  bg-white py-3 px-24'/> */}
                <SecondaryButton title="View all products" className='px-16 py-3 bg-white text-primary' style={{ border: "2px solid #008BFF" }} />
            </div>
        </section>
    )
}

export default Products