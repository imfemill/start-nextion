// This hook checks if an element is on the screen (in the viewport) — useful for lazy loading or animations.

import { useState, useEffect } from 'react';

function useOnScreen(ref: React.RefObject<HTMLElement>): boolean {
    const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isOnScreen;
}

export default useOnScreen;
