import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
import { client } from './lib/sanity';
// import { client } from '@/sanity/lib/client';

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


const Home = async () => {

  const allProducts = await getData();
  console.log("Data: ", allProducts);

  // console.log("all", allProducts);


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

// export async function getStaticProps() {
//   const query = `*[_type == "product"]`;
//   const allProducts = await client.fetch(query);

//   return {
//     props: {
//       allProducts
//     }
//   };
// }


export default Home
