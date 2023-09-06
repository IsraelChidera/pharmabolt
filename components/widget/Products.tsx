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
// import product8 from '../../public/assets/product8.png';

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

            <div className='pt-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-6 space-y-5 md:space-y-10 '>
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