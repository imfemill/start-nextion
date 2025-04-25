// This hook allows you to store and retrieve values from the browser's localStorage in a way that's reactive to state changes.

import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(initial);

    const setStoredValue = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };

    return [value, setStoredValue] as const;
}

export default useLocalStorage;
