import { flushStorageAndCookies } from '@/lib/utils';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CircleUserIcon } from 'lucide-react';
import Link from 'next/link';

const HeaderMenuComponent = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className={`outline-hidden flex items-center justify-center`}>
                    <CircleUserIcon className="h-5 w-5 hover:text-neutral-700 cursor-pointer" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in py-2"
            >
                <div className="py-1">
                    <div className="block px-4 text-sm font-semibold text-gray-800">
                        Signed in as
                    </div>
                    <div className="block px-4 text-sm font-semibold text-gray-800">
                        admin@webcodegenie.com
                    </div>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                        >
                            Account settings
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/support"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                        >
                            Support
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/license"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                        >
                            License
                        </Link>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="/login"
                            onClick={flushStorageAndCookies}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                        >
                            Sign out
                        </Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};

export default HeaderMenuComponent;
