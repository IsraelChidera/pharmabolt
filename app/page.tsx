import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
import client from './lib/sanity';
import { groq } from 'next-sanity';
import { Product } from './lib/interface';
import { useState } from 'react';


const query = groq`*[_type == "product"]`;


export default async function Home() {

  const products = await client.fetch(query);  

  // console.log("all p: ", products);    

  return (
    <main className=''>      
      <Hero />
      <Products products={products} />
      <BookConsultation />
      <CreateAccount />
      <Testimonials />
      <Newsletter />
    </main>
  )
}


