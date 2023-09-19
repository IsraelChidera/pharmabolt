import React from 'react'
import { CustomButton } from '..'
import { Product } from '@/app/lib/interface';
import Link from 'next/link'
import { urlfor } from '@/app/lib/sanity';
// import { useRouter } from 'next/navigation';

const Product = ({ name, image, price, slug, description, popularproducts, categories }: Product) => {

    const truncatedLongName = (name: string, maxLengthOfProductName: number) => {
        if (name.length > maxLengthOfProductName) {

            const trauncatedWords = name.substring(0, maxLengthOfProductName - 6)
            return `${trauncatedWords} . . .`
        }

        return name;
    }

    const quantity: number = 0;

    const handleQuantityIncrease = () => {

    }

    const handleQuantityDecrease = () => {

    }

    return (
        <section className='flex justify-center'>
            <div className='flex flex-col justify-around'>
                <Link
                    href={`/product/${slug.current}`}
                    prefetch
                >
                    <div className='rectangle2 bg-white relative'>
                        {popularproducts && <div className='absolute top-0 left-0' style={{ background: "#fffcbc" }}>
                            <p className='text-xs md:text-sm font-bold p-2'> Popular </p>
                        </div>}

                        <img src={urlfor(image.asset._ref).url()} alt={image.alt} />
                    </div>

                    <p className='font-bold pt-2'> {truncatedLongName(name, 21)} </p>
                    <p className='text-xs'>NGN {price} </p>

                </Link>
                {
                    quantity === 0 ?
                        <CustomButton
                            title="Add to cart"
                            className='w-full py-2 text-xs mt-4'
                        />
                        :
                        <div className='md:text-lg flex space-x-4 items-center mt-6 md:mt-4'>
                            <p className='text-xs'>Quantity</p>
                            <div className='flex items-center space-x-10'>
                                <button onClick={handleQuantityIncrease} className='font-bold bg-blue-700 border 
                                px-2 text-white rounded-md'> - </button>
                                <p> {quantity} </p>
                                <button onClick={handleQuantityDecrease} className='font-bold bg-blue-700 border 
                                px-2 text-white rounded-md'> + </button>
                            </div>
                        </div>
                }
            </div>

        </section>
    )
}

export default Product