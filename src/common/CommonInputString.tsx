'use client';

import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';

interface CommonInputFieldProps {
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const CommonInputField: React.FC<CommonInputFieldProps> = ({
    inputAttributes,
    onChange,
    onFocus,
    onBlur
}) => {
    const { placeholder, id, name, disabled, type, value } = inputAttributes;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <input
                id={id}
                name={name}
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type || 'text'}
                disabled={disabled}
                spellCheck={false}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                autoComplete="off"
                className={`
            bg-white border border-light rounded-md focus-visible:outline-none 
            text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] 
            placeholder:text-gray-400 focus-within:border-neutral-400
            ${type === 'password' ? 'pe-10' : ''}
            `}
            />
            {type === 'password' && (
                <>
                    {showPassword ? (
                        <EyeIcon
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            size={20}
                            onMouseDown={() => setShowPassword(!0)}
                            onMouseUp={() => setShowPassword(!1)}
                            onMouseEnter={() => setShowPassword(showPassword)}
                            onMouseLeave={() => setShowPassword(false)}
                            strokeWidth={1}
                        />
                    ) : (
                        <EyeOffIcon
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            size={20}
                            onMouseDown={() => setShowPassword(!0)}
                            onMouseUp={() => setShowPassword(!1)}
                            onMouseEnter={() => setShowPassword(showPassword)}
                            onMouseLeave={() => setShowPassword(false)}
                            strokeWidth={1}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default CommonInputField;
