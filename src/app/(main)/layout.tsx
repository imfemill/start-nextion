'use client';

import HeaderComponent from '@/components/HeaderComponent';
import SidebarComponent from '@/components/SidebarComponent';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

    return (
        <main className="relative min-h-screen md:flex">
            <SidebarComponent setExpand={setSideMenuIsExpand} />
            <section
                className={`flex-1 min-h-screen mx-0 bg-[#f8f9fa]  transition-all duration-300 ease-in-out ${
                    sideMenuIsExpand ? 'md:ml-64' : 'md:ml-20'
                }`}
            >
                <HeaderComponent />
                <section className="p-5 pt-16">{children}</section>
            </section>
        </main>
    );
}
