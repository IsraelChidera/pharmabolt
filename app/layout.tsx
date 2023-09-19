
// import { useState, useEffect } from 'react'
import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ShoppingCartProvider } from '@/utilities/CartContext'



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

      <body className={inter.className}>
        <ShoppingCartProvider>
          <Navbar />
          {children}
          <Footer />
        </ShoppingCartProvider>
      </body>

    </html>
  )
}
