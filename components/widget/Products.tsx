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

import { CustomButton } from '..';

const Products = () => {

    const handleClick = () => {

    }

    return (
        <section className='mt-40 mx-auto md:w-5/6'>
            <h2 className='text-2xl font-bold text-center'>
                Browse medication and products
            </h2>

            <div className='pt-6 mt-10 md:grid grid-cols-4 gap-x-4 gap-y-6'>
                <div>
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

                <div>
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
            </div>
        </section>
    )
}

export default Products