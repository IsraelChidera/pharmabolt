"use client"

import Image from 'next/image';
import React from 'react';
import { CustomButton, SecondaryButton } from '..';
import Product from './Product';
import { Product as Items } from '@/app/lib/interface';

const Products = ({ products }: { products: Items[] }) => {

    const handleClick = () => {
    }

    // console.log("allProducts", products);

    return (
        <section className='md:mt-40 mt-32 mx-3 md:mx-auto md:w-5/6'>
            <h2 className='text-2xl font-bold text-center'>
                Browse medication and products
            </h2>

            <div className='pt-6 mt-10 grid-container '>
                {
                    products.map((item) => (
                        <Product                             
                            key={item.slug}                             
                            slug={item.slug}
                            name={item.name} 
                            image={item.image}                                
                            price={item.price}
                            description={item.description}                         
                        />
                    ))
                }                                           

            </div>

            <div className='mx-auto mt-10 flex items-center justify-center'>
                {/* <CustomButton  title="View all products" className='border  bg-white py-3 px-24'/> */}
                <SecondaryButton title="View all products" className='px-16 py-3 md:text-base text-sm bg-white text-primary' style={{ border: "2px solid #008BFF" }} />
            </div>
        </section>
    )
}

export default Products