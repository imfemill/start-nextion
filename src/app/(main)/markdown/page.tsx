'use client';

import LayoutTitleComponent from '@/components/LayoutTitleComponent';
import Welcome from '@/markdown/welcome.mdx';

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
