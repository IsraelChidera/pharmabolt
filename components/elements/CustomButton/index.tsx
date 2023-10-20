import { CustomButtonProps } from '@/types'
import React from 'react'

const index = ({ title, disabled, className, onClick, type, ...rest }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            
            type={type}
            disabled={disabled}
            
            className={`rounded-lg bg-sky-500 transition-all duration-300 ease-in-out hover:bg-sky-700  text-sm text-white ${className}`}
            {...rest}
        >
            {title}
        </button>
    )
}

export default index