'use client';

import BreadCrumbComponent from '@/components/BreadCrumbComponent';
import HeaderComponent from '@/components/HeaderComponent';
import SidebarComponent from '@/components/SidebarComponent';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

    return (
        <html lang="en" suppressHydrationWarning dir="ltr">
            <body className="antialiased" cz-shortcut-listen="true">
                <main className="relative min-h-screen md:flex">
                    <SidebarComponent setExpand={setSideMenuIsExpand} />
                    <section
                        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
                            sideMenuIsExpand ? 'md:ml-64' : 'md:ml-20'
                        }`}
                    >
                        <HeaderComponent />
                        <BreadCrumbComponent />
                        <section className="bg-[#f8f9fa] p-5">{children}</section>
                    </section>
                </main>
            </body>
        </html>
    );
}
