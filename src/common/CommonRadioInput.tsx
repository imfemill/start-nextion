'use client';

interface CommonRadioButtonProps {
    name: string;
    options: Array<{
        id: string;
        label: string;
        value: string;
        disabled?: boolean;
        checked?: boolean;
    }>;
    isGrouped?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonRadioButton: React.FC<CommonRadioButtonProps> = ({
    name,
    options,
    onChange,
    isGrouped
}) => {
    // Define base styles for the radio button input
    const baseInputStyles =
        'w-4 h-4 after:text-primary bg-white border-light border focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed accent-primaryDark';
    const getLabelStyles = (disabled: boolean | undefined) =>
        `ml-2 pt-0.5 flex items-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

    return (
        <div
            className={`flex h-[38px] ${isGrouped ? 'bg-light rounded-md divide-x-1 divide-white' : 'gap-3'}`}
        >
            {options?.map(({ id, label, disabled, value, checked }) => (
                <div key={id} className={`flex items-center ${isGrouped ? 'px-3' : ''}`}>
                    <input
                        id={id}
                        type="radio"
                        name={name}
                        value={value}
                        className={baseInputStyles}
                        onChange={onChange}
                        checked={checked}
                        disabled={disabled}
                    />
                    <label htmlFor={id} className={getLabelStyles(disabled)}>
                        {label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CommonRadioButton;
