import React from 'react';
import HeaderMenuComponent from './HeaderMenuComponent';

const HeaderComponent = () => {
    return (
        <div className="border bg-neutral-50 border-light p-4 flex justify-end fixed top-0 right-0 w-full z-[998]">
            <HeaderMenuComponent />
        </div>
    );
};

export default HeaderComponent;
