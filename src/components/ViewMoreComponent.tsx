'use client';

import React, { useState, useCallback, memo } from 'react';

const MoreText = memo(({ text }: { text: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const textLength = 55; // Number of characters to display initially
    // Toggle the expanded state
    const toggleText = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    // Determine the text to display
    const displayText = isExpanded
        ? text
        : `${text.slice(0, textLength)}${text.length > textLength ? '...' : ''}`;

    return (
        <div className="group flex flex-wrap">
            <p
                className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-full' : 'max-h-full'
                } text-gray-800`}
            >
                {displayText}
                {text.length > textLength && (
                    <button
                        onClick={toggleText}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer break-all"
                    >
                        {isExpanded ? 'Show Less' : 'View More'}
                    </button>
                )}
            </p>
        </div>
    );
});

MoreText.displayName = 'MoreText';

export default MoreText;
