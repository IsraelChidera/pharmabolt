'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import logo from '../../public/assets/logo.svg';
import search from '../../public/assets/search-icon.svg';
import hamburger from '../../public/assets/hamburger-icon.svg';
import cancel from '../../public/assets/cancel.png';
import call from '../../public/assets/call-icon.svg';
import person from '../../public/assets/person-icon.svg';
import cart from '../../public/assets/cart-icon.svg';
import { redirect, useRouter } from 'next/navigation';
import NavigationItem from '../elements/NavigationItem';
import { CustomButton, SecondaryButton } from '..';
import { useShoppingCart } from '@/utilities/CartContext';
import { useUserContext } from '@/utilities/UserContext';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const navigate = useRouter();
  const [open, setOpen] = useState(false);
  const { cartQuantity } = useShoppingCart();

  const openMobileMenu = () => {
    setOpen(prev => !prev);
  }

  const { currentUser } = useUserContext();  


  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate.push("/login");
      console.log("Signed out successfully");
    }).catch((error) => {
      // An error happened.
    });
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

            <div className='flex justify-end'>


              {currentUser !== "" ?
                (<button
                  onClick={handleLogout}
                  className='inline-flex cursor-pointer justify-end items-center space-x-2'
                >
                  <Image src={person} alt="call icon" />
                  <p className=''>Logout</p>
                </button>) :
                (
                  <Link href="/login" className='cursor-pointer inline-flex justify-end items-center space-x-2'>
                    <Image src={person} alt="call icon" />
                    <p className=''>Login</p>
                  </Link>
                )
              }
            </div>

          </div>
        </div>

        <div className='flex justify-end pt-1 mt-4 mb-2'>
          <ul className='text-xs flex items-center space-x-4 '>
            <NavigationItem href="/">Home</NavigationItem>

            <NavigationItem href="/shop">Shop</NavigationItem>

            <NavigationItem href="/consultation">Book a consultation</NavigationItem>

            <NavigationItem href="#">Contact us</NavigationItem>

            <div className='flex space-x-3'>
              <div className='relative'>
                <Image src={cart} alt='cart icon' className='relative z-20' />
                {
                  cartQuantity > 0 &&
                  <span
                    style={{ fontSize: "9px", background: "#E20000" }}
                    className=' p-0.5 z-10 rounded-md text-white absolute -top-3 
                  -right-2'>
                    {cartQuantity}
                  </span>
                }
              </div>
              <NavigationItem className="flex space-x-1" href="/cart">
                <span>cart</span>
              </NavigationItem>
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className='fixed top-0 left-0 w-full bg-white z-40 flex justify-between px-4 py-6 md:hidden'>
        <Link prefetch href="/"> <Image src={logo} alt="pharmabolt logo" style={{ width: "50px" }} /> </Link>

        <div className='flex items-center space-x-5'>
          <Image src={search} alt="mobile search icon" className='cursor-pointer' style={{ width: "18px" }} />

          <div className='relative'>
            <Link href="/cart">
              <Image src={cart} alt='cart icon' className='relative z-20' style={{ width: "18px" }} />
            </Link>

            <span style={{ fontSize: "6px", background: "#E20000" }} className=' p-1 z-10 rounded-md text-white absolute -top-3 -right-2'>3</span>
          </div>

          <Image onClick={openMobileMenu} className='cursor-pointer' src={open ? cancel : hamburger} alt="mobile hamburger icon" style={{ width: "18px" }} />
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

              <NavigationItem onClick={() => setOpen(false)} href="/consultation">Book a consultation</NavigationItem>

              <NavigationItem onClick={() => setOpen(false)} href="#">Contact us</NavigationItem>

            </ul>

            <div className='mt-12 space-y-6 flex flex-col '>
              {
                currentUser !== "" &&
                <SecondaryButton
                  onClick={() => {
                    handleLogout()
                    setOpen(false)
                  }}
                  title="Logout"
                  className='px-16 py-3 text-sm bg-white text-primary'
                  style={{ border: "2px solid #008BFF" }}
                />
              }

              <CustomButton onClick={() => { navigate.push("/register"); setOpen(false) }} title="Create account" 
                className={`${currentUser !== ""? 'hidden' : 'block'} px-16 py-3 text-sm`}
               />

              <SecondaryButton onClick={() => { navigate.push("/login"); setOpen(false) }} title="Sign in" 
                className={`${currentUser !== ""? 'hidden' : 'block'} px-16 py-3 text-sm bg-white text-primary`} style={{ border: "2px solid #008BFF" }} />
            </div>
          </div>

        </div>
      }
    </nav>
  )
}

export default Navbar