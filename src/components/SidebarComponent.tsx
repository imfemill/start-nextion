'use client';

import { sidebarStructure } from '@/routes/structure';
import { ChevronLeftIcon, ChevronRightIcon, ComponentIcon, HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, JSX, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface SidebarProps {
    setExpand: (value: boolean) => void;
}

interface MenuState {
    open: boolean;
    height: string;
}

interface SidebarItem {
    id: string;
    name: string;
    title: string;
    icon?: string;
    link?: string;
    parent?: boolean;
    child?: SidebarItem[];
}

const SidebarComponent: FC<SidebarProps> = ({ setExpand }) => {
    const username = 'Start Nextion';
    const company = 'Femil & Smit';
    const link = '/';
    const router = useRouter();
    const [openedMenu, setOpenedMenu] = useState<Record<string, MenuState>>({});
    const [activeName, setActiveName] = useState('');
    const [isExpand, setIsExpand] = useState(true);
    const [isExpandOnHover, setIsExpandOnHover] = useState(false);

    const listRef = useRef<Record<string, HTMLUListElement | null>>({});

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
        const rootEl = name.split('.')[0];
        setOpenedMenu((prevState) => {
            const isOpen = !prevState[name]?.open;
            const newHeight = !isOpen ? '0px' : `${listRef.current[name]?.scrollHeight || 0}px`;

            return {
                ...prevState,
                [name]: { open: !isOpen, height: newHeight },
                [rootEl]: {
                    open: isOpen,
                    height: newHeight
                }
            };
        });
    };

    const generateIcon = (icon: string) => {
        const iconsMap: Record<string, JSX.Element> = {
            dashboard: <HomeIcon size={16} />,
            components: <ComponentIcon size={16} />
        };
        return iconsMap[icon] || null;
    };

    const generateMenu = (item: SidebarItem, index: number, recursive = 0) => {
        const isActive = activeName === item.name || activeName.split('.')[0] === item.name;
        const classesActive = activeName === item.name ? 'active text-blue-600 font-semibold' : '';
        // const classesActive = isActive ? 'text-blue-600 font-semibold' : 'text-slate-500';

        return (
            <li key={index}>
                {
                    <Link
                        role="button"
                        tabIndex={0}
                        id={item.id}
                        href={item.link || '#'}
                        onClick={() =>
                            'child' in item
                                ? handleToggle(item.name)
                                : handleNavigate(item.name, item.link)
                        }
                        onKeyDown={(event) => {
                            if (event.code === 'Space') {
                                void ('child' in item
                                    ? handleToggle(item.name)
                                    : handleNavigate(item.name, item.link));
                            }
                        }}
                        className={[
                            'group flex items-center justify-between h-10 py-0 pr-3 mb-1 rounded-md cursor-pointer focus:outline-none',
                            recursive === 0 ? 'pl-[18px]' : recursive === 1 ? 'pl-11' : 'pl-16',
                            isActive
                                ? 'text-blue-600 font-semibold hover:bg-slate-300/20'
                                : 'hover:bg-slate-300/20',
                            isActive && item.parent ? 'bg-blue-100/50' : ''
                        ].join(' ')}
                    >
                        <div className="flex items-center gap-3">
                            {item.icon ? (
                                item.icon === 'dot' ? (
                                    <div className="h-3 w-3 flex items-center justify-center">
                                        <div
                                            className={[
                                                `${classesActive ? 'h-2 w-2' : 'h-1 w-1'}`,
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
                                    isExpand || isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                                }`}
                            >
                                {item.title}
                            </span>
                        </div>
                        {'child' in item && (
                            <ChevronRightIcon
                                className={`transform transition duration-300 ${
                                    openedMenu[item.name]?.open ? 'rotate-270' : 'rotate-90'
                                }`}
                                size={16}
                                strokeWidth={1}
                            />
                        )}
                    </Link>
                }
                {'child' in item && (isExpand || isExpandOnHover) && (
                    <ul
                        ref={(el) => {
                            listRef.current[item.name] = el;
                        }}
                        className="transition-max-height overflow-hidden duration-300 ease-in-out"
                        style={{ maxHeight: `${openedMenu[item.name]?.height || '0px'}` }}
                    >
                        {item.child?.map((child, idx) => generateMenu(child, idx, recursive + 1))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <nav
            role="navigation"
            className={[
                'bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0 transition-all duration-300 ease-in-out md:fixed',
                isExpand ? 'w-64' : isExpandOnHover ? 'w-64 backdrop-blur-md' : 'w-20'
            ].join(' ')}
        >
            <button
                className="absolute z-50 top-10 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200 cursor-pointer"
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
                                    isExpand || isExpandOnHover ? 'bg-slate-300/25 px-4 gap-3' : ''
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
                                {sidebarStructure.map((item, index) => generateMenu(item, index))}
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </nav>
    );
};

export default SidebarComponent;
