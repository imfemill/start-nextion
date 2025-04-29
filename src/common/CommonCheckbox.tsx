'use client';

interface CommonCheckboxProps {
    name: string;
    options: Array<{
        id: string;
        label: string;
        value: string;
        disabled?: boolean;
        checked?: boolean;
    }>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({ name, options, onChange }) => {
    // Define base styles for the checkbox input
    const baseInputStyles =
        'w-4 h-4 bg-white border-light border focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed accent-primaryDark';
    const getLabelStyles = (disabled: boolean | undefined) =>
        `ml-2 flex items-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

    return (
        <div className="flex h-[38px] gap-2">
            {options.map((option) => (
                <div key={option?.id} className="flex items-center">
                    <input
                        type="checkbox"
                        id={option?.id}
                        name={name}
                        value={option.value}
                        checked={option.checked}
                        disabled={option.disabled}
                        onChange={onChange}
                        className={baseInputStyles}
                    />
                    <label htmlFor={option?.id} className={getLabelStyles(option?.disabled)}>
                        {option?.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CommonCheckbox;
