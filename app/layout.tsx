
// import { useState, useEffect } from 'react'
import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ShoppingCartProvider } from '@/utilities/CartContext'
import { UserProvider } from '@/utilities/UserContext'
import FloatingButton from '@/components/elements/FloatingButton'

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
        <UserProvider>
          <ShoppingCartProvider>
            <Navbar />
            <FloatingButton />
            {children}
            <Footer />
          </ShoppingCartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
