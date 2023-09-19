"use client"

import Image from 'next/image';
import React from 'react';
import CustomButton from '../../elements/CustomButton';
import SecondaryButton from '../../elements/SecondaryButton';
import Product from '../../widget/Product';
import { ProductType } from '@/app/lib/interface';

const Products = ({ products }: { products: ProductType[] }) => {


    return (
        <section className='md:mt-40 mt-20 mx-3 md:mx-auto md:w-5/6'>
            <h2 className='md:text-2xl text-lg font-bold text-center'>
                Browse medication and products
            </h2>

            <div className="md:hidden block border-b mx-20 pb-2"> </div>

            <div className='pt-6 mt-4 md:mt-10 grid-container '>
                {
                    products.map(item => (
                        <>
                            <div key={item.idx}>
                                <Product
                                    {...item}
                                />
                            </div>
                        </>
                    ))
                }

            </div>

            <div className='mx-auto md:mt-12 mt-14 flex items-center justify-center'>
                {/* <CustomButton  title="View all products" className='border  bg-white py-3 px-24'/> */}
                <SecondaryButton title="View all products" className='px-16 py-3 md:text-base text-sm bg-white text-primary' style={{ border: "2px solid #008BFF" }} />
            </div>
        </section>
    )
}

export default Products