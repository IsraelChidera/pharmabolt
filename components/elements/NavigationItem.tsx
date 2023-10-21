'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const NavigationItem = ({ href, onClick, children, className, ...rest}: { onClick?:any, href: string, children: React.ReactNode, className?:string }) => {
    const currentRoute = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(currentRoute === href);
    }, [currentRoute, href])

    return (
        <li onClick={onClick} className={`${className} `}>
            <Link prefetch {...rest} href={href} className={isActive ? `text-primary relative` : `hover:text-sky-700`}>
                {children}
            </Link>
        </li>
    )
}

export default NavigationItem