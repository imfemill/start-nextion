import ReduxProvider from '@/store/provider';
import '@/styles/globals.css'; // your Tailwind CSS
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { ConfigProvider } from 'antd';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Context from '@/store/context/context';

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true} dir="ltr">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body className={`antialiased`} cz-shortcut-listen="true">
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#f37438' // your custom color
                        }
                    }}
                >
                    <AntdRegistry>
                        <ReduxProvider>
                            <Context />
                            {children}
                            <Toaster position="top-center" />
                        </ReduxProvider>
                    </AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
