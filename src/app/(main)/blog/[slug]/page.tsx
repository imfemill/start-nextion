'use client';

import { setCurrentPageTitle } from '@/store/context/currentPageTitleSlice';
import { useParams } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const Blog: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();

    // Dispatch the page title dynamically based on the slug
    const handleSetPageTitle = () => {
        dispatch(setCurrentPageTitle({ title: `Blog - ${params?.slug}` }));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{`Blog: ` + params?.slug}</h1>
            <p className="text-gray-600 mb-6">
                Welcome to the blog post about <>{params?.slug}</>. Stay tuned for more updates!
            </p>
            <button
                onClick={handleSetPageTitle}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            >
                Set Page Title
            </button>
        </div>
    );
};

export default Blog;
