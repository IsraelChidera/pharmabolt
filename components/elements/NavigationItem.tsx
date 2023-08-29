'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const NavigationItem = ({ href, children, ...rest }: { href: string, children: React.ReactNode }) => {
    const currentRoute = usePathname();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(currentRoute === href);
    }, [currentRoute, href])

    return (
        <li>
            <Link {...rest} href={href} className={isActive ? `text-primary relative` : ``}>
                {children}
            </Link>
        </li>
    )
}

export default NavigationItem