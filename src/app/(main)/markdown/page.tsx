'use client';

import dynamic from 'next/dynamic';

const Welcome = dynamic(() => import('@/markdown/welcome.mdx'));
const LayoutTitleComponent = dynamic(() => import('@/components/LayoutTitleComponent'));

export default function Page() {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Markdown'
                    }
                ]}
                pageTitle="Markdown"
            />

            <Welcome />
        </>
    );
}
