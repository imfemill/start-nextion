import React from 'react';

const CommonLoader = () => {
    return (
        <div className="top-0 left-0 z-[999999] w-full h-[40rem] rounded-sm bg-light flex items-center justify-center">
            <div className="w-12 h-12 rounded-full inline-block relative box-border border-2 border-transparent border-y-[#f26522] animate-spin before:content-[''] before:box-border before:absolute before:left-1/2 before:top-1/2 before:border-[24px] before:border-transparent before:border-y-[rgba(242,101,34,0.35)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2"></div>
        </div>
    );
};

export default CommonLoader;
