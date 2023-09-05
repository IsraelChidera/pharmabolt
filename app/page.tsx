import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
// import { client } from '@/sanity/lib/client';

export default function Home() {
  // console.log("all", allProducts);

  return (
    <main className=''>

      <Hero />
      <Products
        // allProducts={allProducts} 
      />
      <BookConsultation />
      <CreateAccount />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

// export async function getStaticProps() {
//   const allProducts = await client.fetch(`*[_type == "product"]`);

//   return {
//     props: {
//       allProducts
//     }
//   };
// }
