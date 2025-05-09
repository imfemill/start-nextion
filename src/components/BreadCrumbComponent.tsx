'use client';

import { Breadcrumb } from 'antd';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface BreadCrumbProps {
    items: { title: string; href?: string }[];
}

const BreadCrumbComponent: React.FC<BreadCrumbProps> = ({ items }) => {
    // Access the pageInfo from the Redux store
    // const pageInfo = useSelector((state: RootState) => state.pageInfo);
    // const pathname = usePathname();

    // Function to generate breadcrumb items dynamically
    const generateBreadcrumbItems = () => {
        // const pathSegments = path.split('/').filter(Boolean); // Split and remove empty segments
        // const breadcrumbItems = pathSegments.map((segment, index) => {
        //     const href = '/' + pathSegments.slice(0, index + 1).join('/'); // Build the href for each segment
        //     const isLast = index === pathSegments.length - 1; // Check if it's the last segment

        //     return {
        //         href: isLast ? undefined : href, // Only add href for non-last segments
        //         title: (
        //             <span className="flex items-center gap-2">
        //                 {isLast && pageInfo?.title
        //                     ? pageInfo?.title
        //                     : segment
        //                           // Capitalize the first letter of each word and join them
        //                           .replace(/-/g, ' ')
        //                           .split(' ')
        //                           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        //                           .join(' ')}
        //             </span>
        //         )
        //     };
        // });

        // Add the home icon as the first breadcrumb item
        return [
            {
                title: (
                    <Link href={'/dashboard'}>
                        <HouseIcon className="cursor-pointer mt-[2px]" size={16} strokeWidth={1} />
                    </Link>
                )
            },
            {
                title: 'Nested Menu',
                menu: {
                    items: [
                        {
                            key: '1',
                            label: <Link href={'/components/buttons'}>Dashboard</Link>
                        },
                        {
                            key: '2',
                            label: (
                                <Link href={'/dashboard'}>
                                    <HouseIcon
                                        className="cursor-pointer mt-[2px]"
                                        size={16}
                                        strokeWidth={1}
                                    />
                                </Link>
                            )
                        },
                        {
                            key: '3',
                            label: (
                                <Link href={'/dashboard'}>
                                    <HouseIcon
                                        className="cursor-pointer mt-[2px]"
                                        size={16}
                                        strokeWidth={1}
                                    />
                                </Link>
                            )
                        }
                    ]
                }
            },
            ...items
        ];
    };

    // const breadcrumbItems = generateBreadcrumbItems();

    return <Breadcrumb items={generateBreadcrumbItems()} />;
};

export default BreadCrumbComponent;
