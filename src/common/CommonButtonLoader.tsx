import { LoaderIcon } from 'lucide-react';
import React from 'react';

const CommonButtonLoader = () => {
    return (
        <span className="flex items-center justify-center gap-2">
            <LoaderIcon className="w-5 h-5 ml-2 animate-spin" />
            Loading...
        </span>
    );
};

export default CommonButtonLoader;
