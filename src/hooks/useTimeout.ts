// This hook sets a timeout and clears it when the component unmounts or the timeout value changes.

import { useEffect, useState } from 'react';

function useTimeout(callback: () => void, delay: number) {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (!isActive) return;

        const timer = setTimeout(callback, delay);

        return () => clearTimeout(timer);
    }, [callback, delay, isActive]);

    return setIsActive;
}

export default useTimeout;
