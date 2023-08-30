import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'

export default function Home() {
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
