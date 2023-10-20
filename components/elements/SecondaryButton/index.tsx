import { SecondaryButtonProps } from '@/types'
import React from 'react'

const index = ({ title, className, onClick, style, ...rest }: SecondaryButtonProps) => {
    return (
        <button 
            onClick={onClick}             
            className={`rounded-lg md:text-sm hover:bg-blue-500 bg-white hover:text-white transition-all duration-300 ease-in-out text-xs text-white ${className}`}
            {...rest}
            style={style}
        >
            {title}
        </button>
    )
}

export default index