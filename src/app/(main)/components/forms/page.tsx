'use client';

import CommonCheckbox from '@/common/CommonCheckbox';
import CommonFileInput from '@/common/CommonFileInput';
import CommonInputNumberField from '@/common/CommonInputNumber';
import CommonInputField from '@/common/CommonInputString';
import CommonMultipleSelection from '@/common/CommonMultipleSelection';
import CommonRadioInput from '@/common/CommonRadioInput';
import CommonSelection from '@/common/CommonSelection';
import CommonTextArea from '@/common/CommonTextArea';

const Dashboard = () => {
    return (
        <section>
            <h1 className="text-2xl font-bold text-primaryDark">Forms</h1>
            <div className="grid grid-cols-4">
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Input Field String</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonInputField
                            inputAttributes={{
                                placeholder: 'Enter your text here',
                                id: '',
                                name: '',
                                disabled: false,
                                defaultValue: ''
                            }}
                            onChange={(/* e */) => {}}
                            onFocus={() => {}}
                            onBlur={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Input Field Number</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonInputNumberField
                            inputAttributes={{
                                placeholder: 'Enter your number here',
                                id: '',
                                name: '',
                                disabled: false,
                                defaultValue: ''
                            }}
                            onChange={(/* e */) => {}}
                            onFocus={() => {}}
                            onBlur={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Password Field</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonInputField
                            inputAttributes={{
                                placeholder: 'Enter your password here',
                                id: '',
                                name: '',
                                type: 'password',
                                disabled: false,
                                defaultValue: ''
                            }}
                            onChange={(/* e */) => {}}
                            onFocus={() => {}}
                            onBlur={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">File Input</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonFileInput
                            inputAttributes={{
                                placeholder: 'Enter your password here',
                                id: '',
                                name: '',
                                type: 'file',
                                disabled: false,
                                defaultValue: ''
                            }}
                            onChange={(/* e */) => {}}
                            onFocus={() => {}}
                            onBlur={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Radio Button</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonRadioInput
                            options={[
                                {
                                    id: 'option1',
                                    value: 'option1',
                                    label: 'Option 1',
                                    disabled: false,
                                    checked: false
                                },
                                {
                                    id: 'option2',
                                    value: 'option2',
                                    label: 'Option 2',
                                    disabled: false,
                                    checked: true
                                },
                                {
                                    id: 'option3',
                                    value: 'option3',
                                    label: 'Option 3',
                                    disabled: true,
                                    checked: false
                                }
                            ]}
                            name="radio-button"
                            onChange={(/* e */) => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Radio Group Button</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonRadioInput
                            options={[
                                {
                                    id: 'option1',
                                    value: 'option1',
                                    label: 'Option 1',
                                    disabled: false,
                                    checked: false
                                },
                                {
                                    id: 'option2',
                                    value: 'option2',
                                    label: 'Option 2',
                                    disabled: false,
                                    checked: true
                                },
                                {
                                    id: 'option3',
                                    value: 'option3',
                                    label: 'Option 3',
                                    disabled: true,
                                    checked: false
                                }
                            ]}
                            name="radio-button"
                            onChange={(/* e */) => {}}
                            isGrouped
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Checkbox</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonCheckbox
                            options={[
                                {
                                    id: 'option1',
                                    value: 'option1',
                                    label: 'Option 1',
                                    disabled: false,
                                    checked: false
                                },
                                {
                                    id: 'option2',
                                    value: 'option2',
                                    label: 'Option 2',
                                    disabled: false,
                                    checked: true
                                },
                                {
                                    id: 'option3',
                                    value: 'option3',
                                    label: 'Option 3',
                                    disabled: true,
                                    checked: false
                                }
                            ]}
                            name="radio-button"
                            onChange={(/* e */) => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Common TextArea</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonTextArea
                            inputAttributes={{
                                placeholder: 'Enter your paragraph here',
                                id: '',
                                name: '',
                                disabled: false,
                                defaultValue: ''
                            }}
                            onChange={(/* e */) => {}}
                            onFocus={() => {}}
                            onBlur={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col  items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">Common Selection</h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonSelection
                            options={[
                                { value: 'option1', label: 'Option 1' },
                                { value: 'option2', label: 'Option 2' },
                                { value: 'option3', label: 'Option 3' }
                            ]}
                            handleChange={() =>
                                /* option:
                                    | { label: string; value: string }
                                    | { label: string; value: string }[]
                                    | null */
                                {
                                    // Handle the selected option here
                                    // console.log(option);
                                }
                            }
                            id="common-selection"
                            placeholder="Select Option..."
                        />
                    </div>
                </div>
                <div className="flex flex-col  items-start bg-white border border-light">
                    <div className="border border-light w-full p-3">
                        <h2 className="text-lg font-semibold text-secondary">
                            Common Multiple Selection
                        </h2>
                    </div>
                    <div className="flex gap-5 p-5 border border-light w-full">
                        <CommonMultipleSelection
                            options={[
                                { value: 'option1', label: 'Option 1' },
                                { value: 'option2', label: 'Option 2' },
                                { value: 'option3', label: 'Option 3' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option5', label: 'Option 5' },
                                { value: 'option6', label: 'Option 6' },
                                { value: 'option7', label: 'Option 7' },
                                { value: 'option8', label: 'Option 8' }
                            ]}
                            handleChange={() =>
                                /* option:
                                    | { label: string; value: string }
                                    | { label: string; value: string }[]
                                    | null */
                                {
                                    // Handle the selected option here
                                    // console.log(option);
                                }
                            }
                            id="common-selection"
                            placeholder="Select Option..."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
