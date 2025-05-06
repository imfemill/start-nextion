import React from 'react';

const CommonTableSkeleton = () => {
    return (
        <section className="selection-none mt-2">
            <div className="border border-neutral-200 rounded-[5px] shadow-xs bg-white divide-y-2 divide-neutral-200">
                {/* Header Skeleton */}
                <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-3 animate-pulse">
                    <div className="h-6 w-48 bg-gray-300 rounded"></div>
                    <div className="flex items-center flex-wrap gap-2">
                        <div className="h-8 w-32 bg-gray-300 rounded"></div>
                    </div>
                </div>

                <div className="divide-y-2 divide-neutral-200">
                    {/* Filter and Search Skeleton */}
                    <div className="py-4 px-5 flex items-center justify-between animate-pulse">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                            <div className="h-8 w-20 bg-gray-300 rounded"></div>
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-8 w-48 bg-gray-300 rounded"></div>
                    </div>

                    {/* Table Skeleton */}
                    <div className="p-5 space-y-4 animate-pulse">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="h-10 bg-gray-300 rounded"></div>
                        ))}
                    </div>

                    {/* Pagination Skeleton */}
                    <div className="py-4 px-5 flex items-center justify-between animate-pulse">
                        <div className="h-6 w-32 bg-gray-300 rounded"></div>
                        <div className="h-8 w-48 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonTableSkeleton;
