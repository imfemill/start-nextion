'use client';

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';

interface Props {
    children: ReactNode;
}

export default function AntdProvider({ children }: Props) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#f37438' // your custom color
                }
            }}
        >
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    );
}
