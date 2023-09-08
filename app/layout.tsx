
// import { useState, useEffect } from 'react'
import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { ProductContext } from '@/context/ProductContext'

// import { Product, ProductContextType } from './lib/interface'
// import { groq } from 'next-sanity'
// import client from './lib/sanity'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pharmabolt',
  description: 'Your health is our priority.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      {/* <ProductContext.Provider value={products}> */}

      <body className={inter.className}>
        {/* <ProductContext> */}
          <Navbar />
          {children}
          <Footer />
        {/* </ProductContext> */}
      </body>

      {/* </ProductContext.Provider> */}
    </html>
  )
}
