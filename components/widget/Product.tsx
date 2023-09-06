import React from 'react'
import { CustomButton } from '..'
import { Product } from '@/app/lib/interface';
import Link from 'next/link'
import { urlfor } from '@/app/lib/sanity';


const Product = ({ name, image, price, slug, description }: Product) => {

    const maxLengthOfProductName = 21;
    const truncatedLongName = (name: string, maxLengthOfProductName: number) => {
        if (name.length > maxLengthOfProductName) {
            
            // const words = name.split(' ');
            const trauncatedWords = name.substring(0, maxLengthOfProductName-6)
            return `${trauncatedWords} . . .`
        }
        
        return name;        
    }

    return (
        <section className='flex '>
            <Link href={`/product/${slug.current}`} prefetch className='flex flex-col justify-around'>
                <div className='rectangle2 bg-white relative'>
                    <div className='absolute top-0 left-0' style={{ background: "#fffcbc" }}>
                        <p className='text-xs md:text-sm font-bold p-2'> Popular </p>
                    </div>
                    <img src={urlfor(image.asset._ref)} alt={image.alt} />
                </div>

                <p className='font-bold pt-2'> {truncatedLongName(name,21)} </p>
                <p className='text-xs'> {price} </p>

                <CustomButton title="Add to cart" className='w-full py-2 text-xs mt-4' />
            </Link>
        </section>
    )
}

export default Product