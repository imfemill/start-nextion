// This hook listens for clicks outside a specific element (commonly used for closing modals or dropdowns).

import { useEffect } from 'react';

function useClickOutside(ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent) => void) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}
export default useClickOutside;
