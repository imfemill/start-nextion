'use client';

import { LoaderCircleIcon, SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import useDebounce from '@/hooks/useDebounce'; // Import the debounce hook

interface CommonSearchInputProps {
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: (value: string) => void; // Updated to pass the debounced value
    isLoading: boolean;
}

const CommonSearchInput: React.FC<CommonSearchInputProps> = ({
    inputAttributes,
    onChange,
    isLoading
}) => {
    const { placeholder, id, name, disabled, defaultValue } = inputAttributes;

    const [inputValue, setInputValue] = useState<string>(String(defaultValue || '')); // Local state for input value
    const debouncedValue = useDebounce(inputValue, 300); // Apply 300ms debounce

    // Trigger the onChange callback with the debounced value
    React.useEffect(() => {
        if (debouncedValue) {
            onChange(debouncedValue);
        } else {
            onChange('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <div className="relative w-full">
            <input
                id={id}
                name={name}
                type="text"
                disabled={disabled}
                spellCheck={false}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update local state
                placeholder={placeholder}
                autoComplete="off"
                className={`
                    bg-white border border-light rounded-sm focus-visible:outline-none 
                    text-gray-900 text-sm rounded-input block w-full py-1 px-1.5 
                    placeholder:text-gray-400 focus-within:border-neutral-400 pe-8
                `}
            />
            {isLoading ? (
                <SearchIcon
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer animate-spin"
                    size={16}
                    strokeWidth={1}
                />
            ) : (
                <LoaderCircleIcon
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer animate-spin transition-all"
                    size={16}
                    strokeWidth={1}
                />
            )}
        </div>
    );
};

export default CommonSearchInput;
