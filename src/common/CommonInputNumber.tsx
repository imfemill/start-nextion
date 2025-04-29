'use client';

interface CommonInputNumberFieldProps {
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const CommonInputNumberField: React.FC<CommonInputNumberFieldProps> = ({
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
            type={'number'}
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
                bg-white border border-light rounded-md focus-visible:outline-none 
                text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] 
                placeholder:text-gray-400
             `}
            formNoValidate
        />
    );
};

export default CommonInputNumberField;
