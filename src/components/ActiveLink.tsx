'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export interface ActiveLinkProps {
    href: string;
    children:ReactNode
}

const ActiveLink = ({href, children }: ActiveLinkProps) => {
    
    const pathNAme = usePathname()
    const isActive = pathNAme===href
    return (
        <Link 
        href={href}
        className={isActive?"font-bold text-[#baff00]":"transition hover:text-[#baff00]"}
        >
        {children}
        </Link>
    )
}

export default ActiveLink;