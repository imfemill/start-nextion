// This hook checks if an element is on the screen (in the viewport) — useful for lazy loading or animations.

import { useState, useEffect } from 'react';

function useOnScreen(ref: React.RefObject<HTMLElement>): boolean {
    const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting);
        });

        const currentElement = ref.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref]);

    return isOnScreen;
}

export default useOnScreen;
