import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer style={{ background: "#0E2133" }}>
      <div className='pt-10 pb-6 px-6 md:flex text-center md:text-left justify-between items-center'>
        <p className='text-white text-sm'>
          Copyright ©2022 PharmaBolt. All Rights Reserved
        </p>

        <div className='flex mt-2 md:mt-0 text-lg items-center justify-center md:justify-left space-x-2 text-white'>
          <AiFillFacebook  className="text-lg"/>

          <AiFillTwitterSquare />

          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  )
}

export default Footer