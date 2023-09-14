import { CustomButtonProps } from '@/types'
import React from 'react'

const index = ({ title, className, onClick, type, ...rest }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{ background: "#008BFF" }}
            type={type}
            className={`rounded-lg bg-blue-700 text-sm text-white ${className}`}
            {...rest}
        >
            {title}
        </button>
    )
}

export default index