import { CustomButtonProps } from '@/types'
import React from 'react'

const index = ({ title, disabled, className, onClick, type, ...rest }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{ background: "#008BFF" }}
            type={type}
            disabled={disabled}
            className={`rounded-lg bg-blue-700 text-sm text-white ${className}`}
            {...rest}
        >
            {title}
        </button>
    )
}

export default index