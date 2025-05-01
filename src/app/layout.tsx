import ReduxProvider from '@/store/provider';
import '@/styles/globals.css'; // your Tailwind CSS
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { ConfigProvider } from 'antd';
import React from 'react';

export const dynamic = 'auto';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true} dir="ltr">
            <body className={`antialiased`} cz-shortcut-listen="true">
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#f37438' // your custom color
                        }
                    }}
                >
                    <AntdRegistry>
                        <ReduxProvider>{children}</ReduxProvider>
                    </AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
