import { SecondaryButtonProps } from '@/types'
import React from 'react'

const index = ({ title, className, onClick, style, ...rest }: SecondaryButtonProps) => {
    return (
        <button 
            onClick={onClick}             
            className={`rounded-lg  text-sm text-white ${className}`}
            {...rest}
            style={style}
        >
            {title}
        </button>
    )
}

export default index