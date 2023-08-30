import { BookConsultation, CreateAccount, Hero, Products, Testimonials, } from '@/components'

export default function Home() {
  return (
    <main className=''>
      
      <Hero />
      <Products />
      <BookConsultation />
      <CreateAccount />
      <Testimonials />
    </main>
  )
}
