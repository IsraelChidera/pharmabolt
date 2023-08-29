'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const NavigationItem = ({ href, children, className, ...rest}: { href: string, children: React.ReactNode, className?:string }) => {
    const currentRoute = usePathname();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(currentRoute === href);
    }, [currentRoute, href])

    return (
        <li className={className}>
            <Link {...rest} href={href} className={isActive ? `text-primary relative` : ``}>
                {children}
            </Link>
        </li>
    )
}

export default NavigationItem