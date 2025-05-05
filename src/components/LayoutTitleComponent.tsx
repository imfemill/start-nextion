import { usePathname } from 'next/navigation';
import BreadCrumbComponent from './BreadCrumbComponent';
import { pageTitle } from '@/lib/constants';

const LayoutTitleComponent = () => {
    const pathname = usePathname();
    return (
        <div>
            {/* <title>{pageTitle[pathname as keyof typeof pageTitle] || 'Title'}</title> */}
            <h1 className="text-2xl font-bold text-primaryDark">
                {pageTitle[pathname as keyof typeof pageTitle] || 'Title'}
            </h1>
            <BreadCrumbComponent />
        </div>
    );
};

export default LayoutTitleComponent;
