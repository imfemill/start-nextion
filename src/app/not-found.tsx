import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-6">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/dashboard"
                className="px-6 py-3 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition duration-300"
            >
                Go Back to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
