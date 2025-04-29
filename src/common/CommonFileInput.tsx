'use client';

interface CommonFileInputProps {
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const CommonFileInput: React.FC<CommonFileInputProps> = ({
    inputAttributes,
    onChange,
    onFocus,
    onBlur
}) => {
    const { placeholder, id, name, disabled, defaultValue } = inputAttributes;
    return (
        <input
            id={id}
            name={name}
            type={'file'}
            min={0}
            step={0.1}
            disabled={disabled}
            spellCheck={false}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`
               bg-white border border-light rounded-md focus-visible:outline-none text-gray-900 text-sm w-full h-[38px] 
               placeholder:text-gray-400 hover:border-gray-300 duration-200
          
                focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px min-w-0 flex-auto border-solid transition-all focus:border-light focus:outline-none focus:transition-shadow file:mr-3 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-light/50 file:text-easyRPrimary hover:file:bg-light/70
                `}
        />
    );
};

export default CommonFileInput;
