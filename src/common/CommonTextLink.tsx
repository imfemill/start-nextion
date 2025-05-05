'use client';

import Link from 'next/link';
import React from 'react';

import { ReactNode } from 'react';

const CommonTextLink = ({ children, href }: { children: ReactNode; href: string }) => {
    return (
        <Link href={href} className="font-medium text-primary hover:text-primaryDark">
            {children}
        </Link>
    );
};

export default CommonTextLink;
