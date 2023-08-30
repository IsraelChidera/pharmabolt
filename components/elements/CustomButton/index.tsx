import { CustomButtonProps } from '@/types'
import React from 'react'

const index = ({ title, className, onClick }: CustomButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            style={{ background: "#008BFF" }} 
            className={`rounded-lg bg-blue-700 text-sm text-white ${className}`}
        >
            {title}
        </button>
    )
}

export default index