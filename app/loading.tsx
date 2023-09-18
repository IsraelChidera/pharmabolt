'use client'

import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo.svg';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center text-lg text-bold'>
            <div>
                <Image className='animate-bounce' src={logo} alt="logo icon for loading" />
            </div>
        </div>
    )
}

export default Loading