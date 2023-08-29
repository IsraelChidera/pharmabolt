import Image from 'next/image'
import React from 'react';
import product1 from '../../public/assets/product.png';

const Products = () => {
  return (
    <section className='mt-20 mx-auto md:w-5/6'>
        <h2 className='text-2xl font-bold text-center'>
            Browse medication and products
        </h2>

        <div className='pt-6 md:grid grid-cols-4 gap-x-4 gap-y-6'>
            <div>
                <div className='rectangle2 bg-white relative'>
                    <Image src={product1} alt="product"/>
                </div>

                <p className='font-bold text-lg pt-2'> Acebrofylline </p>
                <p> NGN 7 850 </p>
            </div>
        </div>
    </section>
  )
}

export default Products