import Head from 'next/head';
import React from 'react';

import AntdProvider from '@/providers/AntdProvider';
import ContextProvider from '@/providers/ContextProvider';
import ReduxProvider from '@/providers/ReduxProvider';
import { Toaster } from 'react-hot-toast';

import NextTopLoader from 'nextjs-toploader';

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
                        <NextTopLoader
                            initialPosition={0.08}
                            crawlSpeed={200}
                            height={3.5}
                            crawl={true}
                            easing="ease"
                            speed={200}
                            shadow="0 0 10px #de500d,0 0 5px #de500d"
                            color="#de500d"
                            showSpinner={false}
                        />
                        {children}
                        <Toaster position="top-center" />
                    </ReduxProvider>
                </AntdProvider>
            </body>
        </html>
    );
}
