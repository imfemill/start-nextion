'use client';

import { OUTLINED, PRIMARY } from '@/lib/constants';

interface CommonButtonProps {
    children: React.ReactNode;
    type?: typeof PRIMARY | typeof OUTLINED;
    variant?: typeof PRIMARY | typeof OUTLINED;
    rounded?: boolean;
    soft?: boolean;
    disabled?: boolean;
    buttonType?: 'button' | 'submit';
    handleClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    children,
    buttonType = 'button',
    type = PRIMARY,
    variant = PRIMARY,
    rounded = false,
    soft = false,
    disabled = false,
    handleClick = () => {}
}) => {
    const getButtonStyle = () => {
        if (variant === PRIMARY) {
            return type === PRIMARY
                ? soft
                    ? 'text-primaryDark bg-primarySoft border border-primarySoft hover:border-primaryDark'
                    : 'text-white bg-primary hover:bg-primaryDark'
                : soft
                  ? 'text-secondaryDark bg-secondarySoft border border-secondarySoft hover:border-secondaryDark'
                  : 'text-white bg-secondary hover:bg-secondaryDark';
        }
        return type === PRIMARY
            ? 'text-primary border border-primary hover:bg-primary hover:text-white'
            : 'text-secondary border border-secondary hover:bg-secondary hover:text-white';
    };

    return (
        <button
            type={buttonType}
            className={`${getButtonStyle()} duration-400 w-full text-sm font-semibold px-3.5 py-1.5 ${
                rounded ? 'rounded-full' : 'rounded-sm'
            } ${disabled ? 'opacity-90 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={!disabled ? handleClick : undefined}
        >
            {children}
        </button>
    );
};

export default CommonButton;
