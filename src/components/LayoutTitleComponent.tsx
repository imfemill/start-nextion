'use client';

import BreadCrumbComponent from './BreadCrumbComponent';

const LayoutTitleComponent = ({
    items,
    pageTitle
}: {
    items?: { title: string; href?: string }[];
    pageTitle?: string;
}) => {
    return (
        <div>
            {/* <title>{pageTitle[pathname as keyof typeof pageTitle] || 'Title'}</title> */}
            <h1 className="text-2xl font-bold text-primaryDark">{pageTitle}</h1>
            <BreadCrumbComponent items={items || []} />
        </div>
    );
};

export default LayoutTitleComponent;
