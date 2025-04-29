/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useRef, useState, JSX } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { sidebarStructure } from './structure';
import { HomeIcon } from 'lucide-react';

interface SideMenuProps {
    isExpand?: boolean;
    isExpandOnHover?: boolean;
}

const SideMenu: FC<SideMenuProps> = ({ isExpand = true, isExpandOnHover = false }) => {
    const username = 'Miles Heizer';
    const company = 'Unilever';
    const profilePic =
        'https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA';
    const link = '/';

    const [openedMenu, setOpenedMenu] = useState<Record<string, { open: boolean; height: string }>>(
        {}
    );
    const [activeName, setActiveName] = useState('');
    const activeLink = window.location.pathname;

    const listRef = useRef<Record<string, HTMLUListElement | null>>({});

    const handleNavigate = (path: string) => {
        setActiveName(path);
    };

    const handleToggle = (name: string) => {
        const rootEl = name.split('.')[0];

        if (openedMenu[name]?.open === true) {
            setOpenedMenu((prevState) => ({
                ...prevState,
                [name]: {
                    open: false,
                    height: '0px'
                },
                [rootEl]: {
                    open: rootEl === name ? false : true,
                    height: `${
                        (listRef.current[rootEl]?.scrollHeight || 0) -
                        (listRef.current[name]?.scrollHeight || 0)
                    }px`
                }
            }));
        } else {
            setOpenedMenu((prevState) => ({
                ...prevState,
                [name]: {
                    open: true,
                    height: `${listRef.current[name]?.scrollHeight || 0}px`
                },
                [rootEl]: {
                    open: true,
                    height: `${
                        (listRef.current[rootEl]?.scrollHeight || 0) +
                        (listRef.current[name]?.scrollHeight || 0)
                    }px`
                }
            }));
        }
    };

    const generateIcon = (icon: string) => {
        const icons_map: Record<string, JSX.Element> = {};

        icons_map['dashboard'] = <HomeIcon size={18} />;
        return icons_map[icon];
    };

    interface MenuItem {
        id: string;
        name: string;
        title: string;
        icon?: string;
        link?: string;
        child?: MenuItem[];
        parent?: boolean;
    }

    const generateMenu = (item: MenuItem, index: number, recursive: number = 0) => {
        if (activeName === '' && activeLink.includes(item.link || '')) {
            setActiveName(item.name);
        }
        const classesActive = activeName === item.name ? 'active' : '';

        return (
            <li key={index}>
                <a
                    role="button"
                    tabIndex={0}
                    id={item.id}
                    onClick={() => {
                        if ('child' in item) {
                            handleToggle(item.name);
                        } else if ('link' in item) {
                            handleNavigate(item.name);
                        }
                    }}
                    onKeyDown={(event) => {
                        const { code } = event;
                        if (code === 'Space') {
                            if ('child' in item) {
                                handleToggle(item.name);
                            } else if ('link' in item) {
                                handleNavigate(item.name);
                            }
                        }
                    }}
                    className={[
                        'group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none',
                        recursive === 0 ? 'pl-4' : recursive === 1 ? 'pl-11' : 'pl-16',
                        activeName === item.name || activeName.split('.')[0] === item.name
                            ? `text-blue-600 font-semibold ${
                                  item.parent ? 'bg-blue-200/20 ' : 'bg-transparent'
                              }`
                            : `text-gray-500 ${item.parent && ''}`,
                        'hover:bg-gray-300/20',
                        classesActive
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
                        <div
                            className={`truncate ${
                                isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                            }`}
                        >
                            {item.title}
                        </div>
                    </div>
                    {'child' in item ? (
                        <div
                            className={`${
                                isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    ) : (
                        false
                    )}
                </a>
                {'child' in item ? (
                    <ul
                        ref={(el) => {
                            listRef.current[item.name] = el;
                        }}
                        className={[
                            'transition-max-height overflow-hidden duration-300 ease-in-out',
                            isExpand ? '' : isExpandOnHover ? '' : 'h-0'
                        ].join(' ')}
                        style={{ maxHeight: `${openedMenu[item.name]?.height || '0px'}` }}
                        key={item.name}
                    >
                        {item.child?.map((value: MenuItem, idx: number) =>
                            generateMenu(value, idx, recursive + 1)
                        )}
                    </ul>
                ) : (
                    false
                )}
            </li>
        );
    };

    return (
        <SimpleBar style={{ height: '100%' }} autoHide>
            <div className="mb-0 list-none text-gray-500">
                <div
                    className={`my-8 flex flex-col items-center overflow-x-hidden duration-300 ${
                        isExpand ? 'px-3' : isExpandOnHover ? 'px-3' : 'px-5'
                    }`}
                >
                    <a
                        href={link}
                        className={`flex items-center rounded-lg w-full h-20 duration-300 ${
                            isExpand
                                ? 'bg-gray-300/25 px-4 gap-3'
                                : isExpandOnHover
                                  ? 'bg-gray-300/25 px-4 gap-3'
                                  : ''
                        }`}
                    >
                        <div
                            className={`rounded-full overflow-hidden duration-300 h-10 w-10 shrink-0`}
                        >
                            <img src={profilePic} className="block" alt="" />
                        </div>
                        <div
                            className={`flex flex-col ${
                                isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'
                            }`}
                        >
                            <div
                                className={`text-base font-semibold text-gray-700 truncate duration-300`}
                            >
                                {username}
                            </div>
                            <div className={`text-sm text-gray-500 truncate`}>{company}</div>
                        </div>
                    </a>
                </div>

                <div className="mt-3 mb-10 p-0 leading-10">
                    <ul className="list-none text-sm font-normal px-3">
                        {sidebarStructure.map((item, index) => generateMenu(item, index))}
                    </ul>
                </div>
            </div>
        </SimpleBar>
    );
};

export default SideMenu;
