'use client';

import { sidebarStructure } from '@/routes/structure';
import {
    BookTypeIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ComponentIcon,
    HomeIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, JSX, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface SidebarProps {
    setExpand: (value: boolean) => void;
}

interface SidebarItem {
    separator?: boolean;
    id: string;
    name: string;
    title: string;
    icon?: string;
    link?: string;
    parent?: boolean;
    nested?: boolean;
    child?: SidebarItem[];
}

const SidebarComponent: FC<SidebarProps> = ({ setExpand }) => {
    const username = 'Start Nextion';
    const company = 'Femil & Smit';
    const link = '/';
    const router = useRouter();
    const pathname = usePathname(); // Get the current path

    const [openedMenu, setOpenedMenu] = useState<Record<string, boolean>>({});
    const [activeName, setActiveName] = useState('');
    const [isExpand, setIsExpand] = useState(true);
    const [isExpandOnHover, setIsExpandOnHover] = useState(false);

    useEffect(() => {
        // Set the active link based on the current pathname
        const findActiveItem = (items: SidebarItem[]): string | null => {
            for (const item of items) {
                if (item?.nested && item?.link && pathname.includes(item.link)) {
                    return item.name;
                }
                if (item.link === pathname) {
                    return item.name;
                }
                if (item.child) {
                    const activeChild = findActiveItem(item.child);
                    if (activeChild) {
                        return activeChild;
                    }
                }
            }
            return null;
        };

        const activeItemName = findActiveItem(sidebarStructure as SidebarItem[]);
        if (activeItemName) {
            setActiveName(activeItemName);
        } else {
            setActiveName('');
        }
    }, [pathname]); // Run this effect whenever the pathname changes
    const handleHoverExpand = (value: boolean) => {
        if (!isExpand) setIsExpandOnHover(value);
    };

    const handleNavigate = (path: string, link?: string) => {
        setActiveName(path);
        if (link) {
            router.push(link);
        }
    };

    const handleToggle = (name: string) => {
        setOpenedMenu((prevState) => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    const generateIcon = (icon: string) => {
        const iconsMap: Record<string, JSX.Element> = {
            dashboard: <HomeIcon size={16} />,
            components: <ComponentIcon size={16} />,
            blog: <BookTypeIcon size={16} />
        };
        return iconsMap[icon] || null;
    };

    const generateMenu = (item: SidebarItem, recursive = 0) => {
        // Helper function to check if the current item or any of its children is active
        const isItemActive = (currentItem: SidebarItem): boolean => {
            if (activeName === currentItem.name) return true;
            if (currentItem.child) {
                return currentItem.child.some(isItemActive);
            }
            return false;
        };

        const isActive = isItemActive(item); // Check if the current item or its children are active
        const isOpen = openedMenu[item.name]; /*  || isActive */ // Open the menu if it's active

        return item?.separator ? (
            <li key={item.id} className="my-2 text-neutral-400 uppercase text-xs font-semibold">
                {item?.title}
                {/* <hr className="border-gray-200 dark:border-gray-700" /> */}
            </li>
        ) : (
            <li key={item.id}>
                <Link
                    href={item.child ? '' : item.link || ''}
                    role="button"
                    // tabIndex={0}
                    onClick={() =>
                        item.child ? handleToggle(item.name) : handleNavigate(item.name, item.link)
                    }
                    onKeyDown={(event) => {
                        if (event.code === 'Space') {
                            if (item.child) {
                                handleToggle(item.name);
                            } else {
                                handleNavigate(item.name, item.link);
                            }
                        }
                    }}
                    className={[
                        'group flex items-center justify-between h-10 py-0 pr-3 mb-1 rounded-md cursor-pointer focus:outline-none',
                        recursive === 0 ? 'pl-[18px]' : recursive === 1 ? 'pl-11' : 'pl-16',
                        isActive
                            ? `text-neutral-900 font-semibold ${
                                  item.parent ? 'bg-neutral-200 ' : 'bg-transparent'
                              }`
                            : `text-neutral-800 ${item.parent && ''}`,
                        'hover:bg-neutral-300/20'
                    ].join(' ')}
                >
                    <div className="flex items-center gap-2">
                        {item.icon ? (
                            item.icon === 'dot' ? (
                                <div className="h-3 w-3 flex items-center justify-center">
                                    <div
                                        className={[
                                            `${isActive ? 'h-2 w-2' : 'h-1 w-1'}`,
                                            'bg-current rounded-full transition duration-200'
                                        ].join(' ')}
                                    ></div>
                                </div>
                            ) : (
                                generateIcon(item.icon)
                            )
                        ) : null}
                        <span
                            className={`truncate ${
                                isExpand || isExpandOnHover ? 'h-4.5' : 'w-0 h-0 opacity-0'
                            }`}
                        >
                            {item.title}
                        </span>
                    </div>
                    {item.child && (
                        <ChevronRightIcon
                            className={`transform transition duration-300 ${
                                isOpen ? 'rotate-270' : 'rotate-90'
                            }`}
                            size={16}
                            strokeWidth={1}
                        />
                    )}
                </Link>
                {item.child && (isExpand || isExpandOnHover) && (
                    <ul
                        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                            isOpen ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                        {item.child.map((child) => generateMenu(child, recursive + 1))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <nav
            role="navigation"
            className={[
                'bg-neutral-50  border-r border-slate-100 shadow-sm absolute inset-y-0 left-0 transition-all duration-300 ease-in-out md:fixed z-[999]',
                isExpand ? 'w-64' : isExpandOnHover ? 'w-64 backdrop-blur-md' : 'w-20'
            ].join(' ')}
        >
            <button
                className="absolute z-50 top-4 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200 cursor-pointer"
                onClick={() => {
                    setIsExpand(!isExpand);
                    setExpand(!isExpand);
                }}
            >
                <ChevronLeftIcon
                    className={`transform transition duration-300 ${
                        isExpand ? 'rotate-0' : '-rotate-180'
                    }`}
                    size={16}
                    strokeWidth={1}
                />
            </button>
            <div
                onMouseEnter={() => handleHoverExpand(true)}
                onMouseLeave={() => handleHoverExpand(false)}
                className="relative h-screen overflow-hidden"
            >
                <SimpleBar style={{ height: '100%' }} autoHide>
                    <div className="mb-0 list-none text-slate-500">
                        <div
                            className={`my-4 flex flex-col items-center overflow-x-hidden duration-300 ${
                                isExpand || isExpandOnHover ? 'px-3' : 'px-5'
                            }`}
                        >
                            <Link
                                href={link}
                                className={`flex items-center rounded-md w-full h-20 duration-300 ${
                                    isExpand || isExpandOnHover ? 'bg-neutral-100 px-4 gap-3' : ''
                                }`}
                            >
                                <div className="rounded-full overflow-hidden h-10 w-10 shrink-0 drop-shadow-2xl border">
                                    <Image
                                        src={'/mask-image.png'}
                                        alt="Profile"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div
                                    className={`flex flex-col ${
                                        isExpand || isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                                    }`}
                                >
                                    <span className="text-base font-semibold text-slate-700 truncate">
                                        {username}
                                    </span>
                                    <span className="text-sm text-slate-500 truncate">
                                        {company}
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-3 mb-10 p-0 leading-10">
                            <ul className="list-none text-sm font-normal px-3">
                                {sidebarStructure.map((item) => generateMenu(item as SidebarItem))}
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </nav>
    );
};

export default SidebarComponent;
