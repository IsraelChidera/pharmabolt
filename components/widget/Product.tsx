import Image from 'next/image'
import React from 'react'
import { CustomButton } from '..'

const Product = () => {
    return (
        <section>
            <div className='flex flex-col justify-around'>
                <div className='rectangle2 bg-white relative'>
                    <div className='absolute top-0 left-0' style={{ background: "#fffcbc" }}>
                        <p className='text-xs md:text-sm font-bold p-2'> Popular </p>
                    </div>
                    {/* <Image src={product1} alt="product" /> */}
                </div>

                <p className='font-bold pt-2'> Name </p>
                <p className='text-xs'> Price </p>

                <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4'  />
            </div>
        </section>
    )
}

export default Product