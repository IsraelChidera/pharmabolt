import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
import client from './lib/sanity';
import { groq } from 'next-sanity';
import { Product } from './lib/interface';

async function getData() {
  const query = `*[_type == "product"]`;
  const data = await client.fetch(query);
  return data;
}

const query = groq`*[_type == "product"]`;


export default async function Home() {

  const products = await client.fetch(query) as Product[];  

  // const data = await getData() as Product[];
  // console.log("data", data);


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


