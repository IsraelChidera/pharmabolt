import React from 'react';
import Image from 'next/image';
import product from '../../../public/assets/product.png';
import { CustomButton } from '@/components';

const Page = () => {
  return (
    <section className='md:mx-auto md:w-5/6 mt-12'>
      <div className='grid grid-cols-2 gap-x-10 border-b pb-8'>
        <div className='flex justify-center items-center rectangle'>
          <Image src={product} alt="product" />
        </div>

        <div>
          <h1 className='font-bold text-2xl'> Jardiance (Empagliofozlin)</h1>
          <p className='text-xl'> NGN 15 000 </p>
          <p className='text-xs mt-4 font-bold' style={{ color: "#039E00" }}>Available</p>

          <div className=''>
            <p>
              This pack contains 30 tablets of Jardiance which is
              helpful in controlling high blood sugar, helps
              prevent kidney damage, blindness, nerve problems,
              loss of limbs, and sexual function problems.
            </p>

            <div className='text-xs flex items-center '>
              <p>Quantity</p>
              <div className='flex items-center space-x-2'>
                <button className='font-bold'> - </button>
                <p> 1 </p>
                <button className='font-bold'> + </button>
              </div>
            </div>

            <CustomButton title='Add to cart' className='px-10 py-2 text-xs mt-4'/>
          </div>
        </div>        
      </div>

      <div>

      </div>
    </section>
  )
}

export default Page