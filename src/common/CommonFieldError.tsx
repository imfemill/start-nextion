import React from 'react';

const CommonFieldError = ({ errorText, isError }: { errorText: string; isError: boolean }) => {
    return (
        isError && (
            <div
                className={`absolute -bottom-2 text-red-600 text-xs font-[400] mt-1 animate-[fadeIn_0.3s_ease-in-out] h-2`}
                style={{
                    opacity: errorText ? 1 : 0,
                    transition: 'opacity 0.05s ease-in-out'
                }}
            >
                {isError ? errorText : ''}
            </div>
        )
    );
};
export default CommonFieldError;
