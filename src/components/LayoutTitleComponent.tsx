import { usePathname } from 'next/navigation';
import BreadCrumbComponent from './BreadCrumbComponent';
import { getPageTitle } from '@/lib/utils';

const LayoutTitleComponent = () => {
    const pathname = usePathname();
    const pageTitle = getPageTitle(pathname);

    return (
        <div>
            {/* <title>{pageTitle[pathname as keyof typeof pageTitle] || 'Title'}</title> */}
            <h1 className="text-2xl font-bold text-primaryDark">{pageTitle}</h1>
            <BreadCrumbComponent />
        </div>
    );
};

export default LayoutTitleComponent;
