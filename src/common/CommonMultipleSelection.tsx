'use client';

import React, { JSX } from 'react';
import Select, { StylesConfig } from 'react-select';

// const dot = (color = "transparent") => ({
//    alignItems: "center",
//    display: "flex",

//    ":before": {
//       backgroundColor: color,
//       borderRadius: 10,
//       content: '" "',
//       display: "block",
//       marginRight: 8,
//       marginLeft: 8,
//       height: 10,
//       width: 10,
//    },
// });

// Function to format the group label in the dropdown
interface GroupLabelData {
    label: string;
    options: { label: string; value: string }[];
}

const FormatGroupLabel = (data: GroupLabelData): JSX.Element => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <span>{data?.label}</span>
        <span
            style={{
                backgroundColor: '#EBECF0',
                borderRadius: '2em',
                color: '#172B4D',
                display: 'inline-block',
                fontSize: 12,
                fontWeight: 'normal',
                lineHeight: '1',
                minWidth: 1,
                padding: '0.16666666666667em 0.5em',
                textAlign: 'center'
            }}
        >
            {data?.options.length}
        </span>
    </div>
);

interface CommonMultipleSelectionProps {
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
    defaultValue?: { label: string; value: string } | { label: string; value: string }[] | null;
}

const CommonMultipleSelection: React.FC<CommonMultipleSelectionProps> = ({
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
    defaultValue
}) => {
    // Custom styles for the select component
    const colorStyles: StylesConfig<
        { label: string; value: string },
        true,
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
                    backgroundColor: '#f3743890'
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
        }),
        multiValue: (provided, state) => ({
            ...provided,
            fontWeight: 500,
            backgroundColor: state.data ? '#cccccc70' : '#f3743890'
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
            isMulti={true}
            closeMenuOnSelect={false}
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
            formatGroupLabel={isGrouped ? FormatGroupLabel : undefined}
            onInputChange={onInputChange}
            onFocus={handleFocus}
        />
    );
};

export default CommonMultipleSelection;
