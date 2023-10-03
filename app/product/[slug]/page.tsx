'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import product from '../../../public/assets/product.png';
import { CustomButton } from '@/components';
import client, { urlfor } from '../../lib/sanity';
import { groq } from 'next-sanity';
import { PageProps, Product as Prod } from '../..//lib/interface';
import Product from '@/components/widget/Product';
import { useShoppingCart } from '@/utilities/CartContext';



const Page = ({ params: { slug } }: PageProps) => {
  const [product, setProduct] = useState<any>({});

  const { products, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const fetchSingleProduct = async () => {
    const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
    const products: any = await client.fetch(query);
    setProduct(products);

  }

  useEffect(() => {
    fetchSingleProduct();
  }, [])

  useEffect(() => {
    console.log(product);
  }, [product])


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

              <div className='md:text-lg flex space-x-4 items-center mt-6 md:mt-4'>
                <p>Quantity</p>
                <div className='flex items-center space-x-10'>
                  <button className='font-bold'> - </button>
                  <p> 1 </p>
                  <button className='font-bold'> + </button>
                </div>
              </div>

              <CustomButton
                // onClick={() => increaseCartQuantity(_id)} 
                title='Add to cart'
                className='px-20 py-2 text-sm mt-8 md:mt-4'
              />
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