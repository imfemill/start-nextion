import LayoutTitleComponent from '@/components/LayoutTitleComponent';
import React from 'react';

const Blog = () => {
    return (
        <>
            <LayoutTitleComponent
                items={[
                    {
                        title: 'Blog'
                    }
                ]}
                pageTitle="Blogs"
            />
            Blog
        </>
    );
};

export default Blog;
