'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../public/assets/logo.svg';
import search from '../../public/assets/search-icon.svg';
import hamburger from '../../public/assets/hamburger-icon.svg';
import cancel from '../../public/assets/cancel.png';
import call from '../../public/assets/call-icon.svg';
import person from '../../public/assets/person-icon.svg';
import cart from '../../public/assets/cart-icon.svg';
import { usePathname } from 'next/navigation';
import NavigationItem from '../elements/NavigationItem';
import { CustomButton, SecondaryButton } from '..';
//kally IT
//www.kallysit.com

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const openMobileMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <nav className='bg-white shadow relative'>
      <div className='mx-auto md:block hidden md:w-5/6 md:py-4'>
        <div style={{ borderColor: "#e6e6e6" }} className='border-b pb-2 flex justify-between space-x-40 items-center'>
          <Link prefetch href="/"> <Image src={logo} alt="pharmabolt logo" /> </Link>

          <div className='grid grid-cols-4 w-full items-center text-xs'>

            <form className='relative col-span-2'>
              <input style={{ border: "2px solid #f3f3f3", padding: "8px 10px" }} className='w-full' type='text' placeholder='Search for a drug' />
              <Image src={search} alt="search icon" className='absolute top-2 right-2' />
            </form>

            <div className='flex justify-end items-center'>
              <Image src={call} alt="call icon" />
              <p style={{ color: "#008BFF" }} className=''>+234 {"(0)"} 812 2675 439</p>
            </div>

            <div className='flex justify-end items-center space-x-2'>
              <Image src={person} alt="call icon" />
              <p className=''>Login</p>
            </div>

          </div>
        </div>

        <div className='flex justify-end pt-1 mt-4 mb-2'>
          <ul className='text-xs flex items-center space-x-4 '>
            <NavigationItem href="/">Home</NavigationItem>

            <NavigationItem href="/shop">Shop</NavigationItem>

            <NavigationItem href="#">Book a consultation</NavigationItem>

            <NavigationItem href="#">Upload a prescription</NavigationItem>

            <NavigationItem href="#">Contact us</NavigationItem>

            <div className='flex space-x-3'>
              <div className='relative'>
                <Image src={cart} alt='cart icon' className='relative z-20' />
                <span style={{ fontSize: "9px", background: "#E20000" }} className=' p-0.5 z-10 rounded-md text-white absolute -top-3 -right-2'>3</span>
              </div>
              <NavigationItem className="flex space-x-1" href="#">
                <span>cart</span>
              </NavigationItem>
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className='flex justify-between px-4 py-6 md:hidden'>
        <Link prefetch href="/"> <Image src={logo} alt="pharmabolt logo" style={{ width: "50px" }} /> </Link>

        <div className='flex items-center space-x-5'>
          <Image src={search} alt="mobile search icon" style={{ width: "18px" }} />

          <div className='relative'>
            <Image src={cart} alt='cart icon' className='relative z-20' style={{ width: "18px" }} />
            <span style={{ fontSize: "6px", background: "#E20000" }} className=' p-1 z-10 rounded-md text-white absolute -top-3 -right-2'>3</span>
          </div>

          <Image onClick={openMobileMenu} src={open ? cancel : hamburger} alt="mobile hamburger icon" style={{ width: "18px" }} />
        </div>
      </div>

      {
        open
        &&
        <div
          style={{ background: "#D1EAFF" }}
          className='flex items-center justify-center h-screen fixed top-14 left-0 w-full z-40'
        >
          <div>
            <ul className='space-y-6 text-center'>
              <NavigationItem onClick={() => setOpen(false)} href="/">Home</NavigationItem>

              <NavigationItem onClick={() => setOpen(false)} href="/shop">Shop</NavigationItem>

              <NavigationItem href="#">Book a consultation</NavigationItem>

              <NavigationItem onClick={() => setOpen(false)} href="#">Upload a prescription</NavigationItem>

              <NavigationItem onClick={() => setOpen(false)} href="#">Contact us</NavigationItem>

            </ul>

            <div className='mt-12 space-y-6 flex flex-col '>
              <CustomButton title="Create account" className='px-16 py-3 text-sm' />

              <SecondaryButton title="Sign in" className='px-16 py-3 text-sm bg-white text-primary' style={{ border: "2px solid #008BFF" }} />
            </div>
          </div>

        </div>
      }
    </nav>
  )
}

export default Navbar