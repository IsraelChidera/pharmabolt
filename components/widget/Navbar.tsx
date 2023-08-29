'use client'

import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo.svg';
import search from '../../public/assets/search-icon.svg';
import call from '../../public/assets/call-icon.svg';
import person from '../../public/assets/person-icon.svg';
import cart from '../../public/assets/cart-icon.svg';
import { usePathname } from 'next/navigation';
import NavigationItem from '../elements/NavigationItem';
//kally IT
//www.kallysit.com

const Navbar = () => {

  const currentRoute = usePathname();

  return (
    <nav className='mx-auto md:w-5/6 md:py-4'>
      <div className='flex justify-between space-x-40 items-center'>
        <div> <Image src={logo} alt="pharmabolt logo" /> </div>

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
            <p className=''>Kingsley B.</p>
          </div>

        </div>
      </div>

      <div className='flex justify-end mt-4 mb-2'>
        <ul className='text-xs flex items-center space-x-4 '>
          <NavigationItem href="/">Home</NavigationItem>

          <NavigationItem href="#">Shop</NavigationItem>

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
    </nav>
  )
}

export default Navbar