
import client from './lib/sanity';
import { groq } from 'next-sanity';
import { Product } from './lib/interface';
import LandingPageLayout from '@/components/widget/LandingPage/LandingPageLayout';

const query = groq`*[_type == "product"]`;

export default async function Home() {

  const products = await client.fetch(query);     

  return (
    <main className=''>            
      <LandingPageLayout/>
    </main>
  )
}


