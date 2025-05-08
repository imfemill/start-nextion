import Head from 'next/head';
import React from 'react';

import AntdProvider from '@/providers/AntdProvider';
import ContextProvider from '@/providers/ContextProvider';
import ReduxProvider from '@/providers/ReduxProvider';
import { Toaster } from 'react-hot-toast';

// your Tailwind CSS
import '@/styles/globals.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={'en'} suppressHydrationWarning={true} dir="ltr">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body className={`antialiased`} cz-shortcut-listen="true">
                <AntdProvider>
                    <ReduxProvider>
                        <ContextProvider />
                        {children}
                        <Toaster position="top-center" />
                    </ReduxProvider>
                </AntdProvider>
            </body>
        </html>
    );
}
