import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
import client from './lib/sanity';
import { groq } from 'next-sanity';
import { Product } from './lib/interface';
import LandingPageLayout from '@/components/widget/LandingPage/LandingPageLayout';



const query = groq`*[_type == "product"]`;


export default async function Home() {

  const products = await client.fetch(query);  

  // console.log("all p: ", products);    

  return (
    <main className=''>            
      <LandingPageLayout/>
    </main>
  )
}


