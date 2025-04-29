'use client';

import { OUTLINED, PRIMARY } from '@/lib/constants';

interface CommonButtonProps {
    children: React.ReactNode;
    type?: typeof PRIMARY | typeof OUTLINED;
    variant?: typeof PRIMARY | typeof OUTLINED;
    rounded?: boolean;
    soft?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    children,
    type = PRIMARY,
    variant = PRIMARY,
    rounded = false,
    soft = false
}) => {
    const getButtonStyle = () => {
        if (variant === PRIMARY) {
            return type === PRIMARY
                ? soft
                    ? 'text-primaryDark bg-primarySoft border border-primarySoft hover:border-primaryDark'
                    : 'text-light bg-primary hover:bg-primaryDark'
                : soft
                  ? 'text-secondaryDark bg-secondarySoft border border-secondarySoft hover:border-secondaryDark'
                  : 'text-light bg-secondary hover:bg-secondaryDark';
        }
        return type === PRIMARY
            ? 'text-primary border border-primary hover:bg-primary hover:text-light'
            : 'text-secondary border border-secondary hover:bg-secondary hover:text-light';
    };

    return (
        <button
            className={`${getButtonStyle()} duration-400 text-sm font-medium cursor-pointer px-3.5 py-1.5 ${
                rounded ? 'rounded-full' : 'rounded-sm'
            }`}
        >
            {children}
        </button>
    );
};

export default CommonButton;
