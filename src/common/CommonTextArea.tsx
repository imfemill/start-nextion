'use client';

interface CommonTextAreaProps {
    inputAttributes: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onFocus: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
}

const CommonTextArea: React.FC<CommonTextAreaProps> = ({
    inputAttributes,
    onChange,
    onFocus,
    onBlur
}) => {
    const { placeholder, id, name, disabled, defaultValue } = inputAttributes;

    return (
        <div className="relative w-full">
            <textarea
                id={id}
                name={name}
                disabled={disabled}
                rows={1} // Set the number of rows
                cols={5} // Set the number of columns
                spellCheck={false}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`
            bg-white border border-light rounded-md focus-visible:outline-none 
            text-gray-900 text-sm rounded-input block w-full py-2 px-2.5  
            placeholder:text-gray-400
            `}
            />
        </div>
    );
};

export default CommonTextArea;
