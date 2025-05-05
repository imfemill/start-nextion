'use client';

import { Breadcrumb } from 'antd';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BreadCrumbComponent: React.FC = () => {
    const pathname = usePathname();

    // Function to generate breadcrumb items dynamically
    const generateBreadcrumbItems = (path: string) => {
        const pathSegments = path.split('/').filter(Boolean); // Split and remove empty segments
        const breadcrumbItems = pathSegments.map((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/'); // Build the href for each segment
            const isLast = index === pathSegments.length - 1; // Check if it's the last segment

            return {
                href: isLast ? undefined : href, // Only add href for non-last segments
                title: (
                    <span className="flex items-center gap-2">
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}{' '}
                    </span>
                )
            };
        });

        // Add the home icon as the first breadcrumb item
        return [
            {
                href: undefined,
                title: (
                    <Link href={'/dashboard'}>
                        <HouseIcon className="cursor-pointer mt-[2px]" size={16} strokeWidth={1} />
                    </Link>
                )
            },
            ...breadcrumbItems
        ];
    };

    const breadcrumbItems = generateBreadcrumbItems(pathname);

    return <Breadcrumb items={breadcrumbItems} />;
};

export default BreadCrumbComponent;
