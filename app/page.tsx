import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
import client from './lib/sanity';
import { groq } from 'next-sanity';

interface IProducts {
  Image: string,
  Name: string,
  Slug: string,
  Price: number,
  Description: string
}

async function getData() {
  const query = `*[_type == "product"]`;
  const data = await client.fetch(query);
  return data;
}

const query = groq`*[_type == "product"]`;


const Home = async () => {

  // const allProducts = await getData();
  // console.log("Data: ", allProducts);

  // console.log("all", allProducts);

  const products:IProducts = await client.fetch(query);
  console.log("Products: ", products);



  return (
    <main className=''>

      <Hero />
      <Products />
      <BookConsultation />
      <CreateAccount />
      <Testimonials />
      <Newsletter />
    </main>
  )
}


export default Home
