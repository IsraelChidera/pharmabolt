'use client'
import React from 'react';
import { CustomButton } from '@/components';
import { urlfor } from '../../lib/sanity';
import { PageProps, Product as Prod } from '../..//lib/interface';
import Product from '@/components/widget/Product';
import { useShoppingCart } from '@/utilities/CartContext';
import { useRouter } from 'next/navigation';



const Page = ({ params: { slug } }: PageProps) => {

  const navigate = useRouter();

  const { getItemQuantity, products, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const product: any = products.find(item => item.slug.current == slug);
  const quantity = getItemQuantity(product._id);


  return (
    <div>
      <section className='md:mx-auto md:w-5/6 mx-4 mt-12'>
        <div className='md:grid md:grid-cols-2 md:gap-x-10 border-b md:pt-10 md:pb-20 pb-8'>
          <div className='flex justify-center items-center rectangle'>
            {product && product.image && product.image.asset && (
              <img src={urlfor(product.image.asset._ref).url()} alt={product.slug?.current} />
            )}

          </div>

          <div className='md:mt-0 mt-6'>
            <h1 className='font-bold text-xl md:text-2xl'> {product.name}</h1>
            <p className='md:text-xl'> NGN {product.price} </p>
            <p className='text-xs mt-4 font-bold' style={{ color: "#039E00" }}>Available</p>

            <div className='mt-2'>
              <p className='md:text-base text-sm'>
                {product.description}
              </p>

              {
                quantity > 0 ?
                  <div className='text-xs w-fit border p-2 flex space-x-4 items-center mt-6 md:mt-4'>
                    <p style={{ color: "#D0D0D0" }}>Quantity</p>
                    <div className='flex items-center space-x-5'>
                      <button className='font-bold'> - </button>
                      <p> {quantity} </p>
                      <button className='font-bold' onClick={() => increaseCartQuantity(product._id)}> + </button>
                    </div>
                  </div> :
                  <CustomButton
                    onClick={() => { increaseCartQuantity(product._id)}}
                    title='Add to cart'
                    className='px-20 py-2 text-sm mt-8 md:mt-4'
                  />
              }
            </div>
          </div>
        </div>

        <div className='md:mt-20 md:mb-20'>
          <div className='pt-6 pb-10 mt-10 grid-container '>
            {
              products.slice(0, 4).map((item) => (
                <Product
                  {...item}
                />
              ))
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default Page