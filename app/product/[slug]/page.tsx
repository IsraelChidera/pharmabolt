import React from 'react';
import Image from 'next/image';
import product from '../../../public/assets/product.png';
import { CustomButton } from '@/components';
import client from '../../lib/sanity';
import { groq } from 'next-sanity';
import { PageProps, Product as Prod } from '../..//lib/interface';
import Product from '@/components/widget/Product';






const Page = async ({ params: { slug } }: PageProps) => {
  const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
  const products = await client.fetch(query) as Prod;
  console.log("prod", products.name);

  return (
    <section className='md:mx-auto md:w-5/6 mx-4 mt-12'>
      <div className='md:grid md:grid-cols-2 md:gap-x-10 border-b pb-8'>
        <div className='flex justify-center items-center rectangle'>
          <Image src={product} alt="product" />
        </div>

        <div className='md:mt-0 mt-10'>
          <h1 className='font-bold text-xl md:text-2xl'> {products.name}</h1>
          <p className='md:text-xl'> NGN {products.price} </p>
          <p className='text-xs mt-4 font-bold' style={{ color: "#039E00" }}>Available</p>

          <div className='mt-2'>
            <p className='md:text-base text-sm'>
              {products.description}
            </p>

            <div className='md:text-lg flex space-x-4 items-center mt-6 md:mt-4'>
              <p>Quantity</p>
              <div className='flex items-center space-x-10'>
                <button className='font-bold'> - </button>
                <p> 1 </p>
                <button className='font-bold'> + </button>
              </div>
            </div>

            <CustomButton title='Add to cart' className='px-20 py-2 text-sm mt-8 md:mt-4' />
          </div>
        </div>
      </div>

      <div>
        <div className='pt-6 mt-10 grid-container '>
          {/* {
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
          } */}

        </div>
      </div>
    </section>
  )
}

export default Page