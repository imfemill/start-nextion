'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';

interface PaginationProps {
    totalItems: number; // Total number of items
    itemsPerPage: number; // Number of items per page
    onPageChange: (page: number) => void; // Callback when the page changes
}

const PaginationComponent: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    onPageChange
}) => {
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
        setCurrentPage(page);
        onPageChange(page); // Trigger the callback
    };

    // Generate pagination numbers dynamically
    const getPaginationNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5; // Maximum number of visible pages

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total pages are less than or equal to maxVisiblePages
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage <= 3) {
                // If near start, show first 5 pages then ellipsis
                for (let i = 2; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // If near end, show last 5 pages with ellipsis at start
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // If in middle, show current page with 2 pages before and after
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };
    return (
        <div className="w-full flex flex-col gap-5 select-none">
            <div className="flex items-center justify-between bg-white">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700 flex gap-1">
                            Showing
                            <span className="font-medium">
                                {(currentPage - 1) * itemsPerPage + 1}
                            </span>
                            to
                            <span className="font-medium">
                                {Math.min(currentPage * itemsPerPage, totalItems)}
                            </span>
                            of
                            <span className="font-medium">{totalItems}</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav
                            className="isolate inline-flex space-x-1.5 rounded-full"
                            aria-label="Pagination"
                        >
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`relative inline-flex items-center rounded-full px-1 py-1 text-gray-400 hover:bg-secondary/20 focus:z-20 focus:outline-offset-0 ${
                                    currentPage === 1
                                        ? 'cursor-not-allowed opacity-50'
                                        : 'cursor-pointer'
                                }`}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon />
                            </button>
                            {/* Page Numbers */}
                            {getPaginationNumbers().map((page, index) =>
                                typeof page === 'number' ? (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(page)}
                                        className={`relative cursor-pointer inline-flex rounded-full items-center px-3 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ${
                                            currentPage === page
                                                ? 'bg-secondary text-white ring-secondary'
                                                : 'text-secondaryDark hover:bg-secondary/20 hover:text-secondary'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ) : (
                                    <span
                                        key={index}
                                        className="relative inline-flex rounded-full items-center px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0"
                                    >
                                        {page}
                                    </span>
                                )
                            )}

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`relative inline-flex items-center rounded-full px-1 py-1 text-gray-400 hover:bg-secondary/20 focus:z-20 focus:outline-offset-0 ${
                                    currentPage === totalPages
                                        ? 'cursor-not-allowed opacity-50'
                                        : 'cursor-pointer'
                                }`}
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationComponent;
