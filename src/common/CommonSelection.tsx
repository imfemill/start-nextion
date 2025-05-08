'use client';

import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface CommonSelectionProps {
    options: { label: string; value: string; isFixed?: boolean }[];
    value?: { label: string; value: string } | { label: string; value: string }[] | null;
    isDisabled?: boolean;
    isClearable?: boolean;
    placeholder?: string;
    id?: string;
    className?: string;
    noOptionsMessage?: () => string;
    handleChange: (
        value: { label: string; value: string } | { label: string; value: string }[] | null
    ) => void;
    handleBlur?: () => void;
    handleFocus?: () => void;
    onInputChange?: (inputValue: string) => void;
    isGrouped?: boolean;
    formatGroupLabel?: (data: {
        label: string;
        options: { label: string; value: string }[];
    }) => React.ReactNode;
    defaultValue?: { label: string; value: string } | { label: string; value: string }[] | null;
}

const CommonSelection: React.FC<CommonSelectionProps> = ({
    options,
    value,
    isDisabled = false,
    isClearable = true,
    placeholder = 'Select Types',
    id,
    noOptionsMessage,
    handleChange,
    handleBlur,
    handleFocus,
    onInputChange,
    isGrouped = false,
    formatGroupLabel,
    defaultValue
}) => {
    // Custom styles for the select component
    const colorStyles: StylesConfig<
        { label: string; value: string },
        false,
        { label: string; options: { label: string; value: string }[] }
    > = {
        control: (provided, state) => ({
            ...provided,
            width: '100%',
            borderRadius: 0.375 + 'rem',
            fontSize: '0.875rem',
            border: state.isFocused ? '1px solid #a1a1a1' : '1px solid #ccc',
            boxShadow: 'none',
            ':hover': {
                border: state.isFocused ? '1px solid #a1a1a1' : '1px solid #ccc'
            },
            ':active': {
                border: state.isFocused ? '1px solid #a1a1a1' : '1px solid #f3743890'
            }
        }),
        option: (provided, state) => {
            return {
                ...provided,
                backgroundColor: state.isSelected
                    ? '#f37438'
                    : state.isFocused
                      ? '#f3743850'
                      : 'inherit',
                ':active': {
                    backgroundColor: state.isSelected ? '#f37438' : '#f3743890'
                }
            };
        },
        valueContainer: (base, isFocused) => ({
            ...base,
            borderColor: isFocused ? '#f37438' : ''
        }),
        menu: (provided) => ({
            ...provided
        }),
        menuList: (provided) => ({
            ...provided
        }),
        input: (provided) => ({
            ...provided
        }),
        singleValue: (provided) => ({
            ...provided
        })
    };

    // Function to handle changes in the select component
    const onChange = (newValue: unknown) => {
        handleChange(
            newValue as { label: string; value: string } | { label: string; value: string }[] | null
        );
    };

    return (
        <Select
            isSearchable
            isDisabled={isDisabled}
            isClearable={isClearable}
            className={`w-full`}
            isMulti={false}
            closeMenuOnSelect={true}
            id={id}
            inputId={id}
            instanceId={id}
            placeholder={placeholder}
            styles={colorStyles}
            options={options}
            defaultValue={defaultValue || null}
            value={value}
            noOptionsMessage={noOptionsMessage || (() => 'Not Found')}
            onChange={onChange}
            onBlur={handleBlur}
            maxMenuHeight={500}
            formatGroupLabel={isGrouped ? formatGroupLabel : undefined}
            onInputChange={onInputChange}
            onFocus={handleFocus}
        />
    );
};

export default CommonSelection;
