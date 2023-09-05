import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'
// import { client } from '@/sanity/lib/client';

interface IProducts {
  Image: string,
  Name: string,
  Slug: string,
  Price: number,
  Description: string
}

export default function Home({ allProducts }: { allProducts: IProducts }) {
  console.log("all", allProducts);
  
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

export async function getStaticProps() {
  // const allProducts = await client.fetch(`*[_type == "product"]`);

  const allProducts: IProducts[] = [
    {
      Image: "sas",
      Name: "Sas",
      Description: "jkj sakl",
      Price: 45,
      Slug: "sas"
    }
  ]

  return {
    props: {
      allProducts
    }
  };
}
