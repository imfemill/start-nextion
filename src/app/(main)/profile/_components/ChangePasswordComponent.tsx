import { Form, Formik } from 'formik';
import { PRIMARY } from '@/lib/constants';
import { successToast } from '@/lib/toast';
import { changePasswordSchema } from './_schemas/changePasswordSchema';
import dynamic from 'next/dynamic';

const CommonButton = dynamic(() => import('@/common/CommonButton'));
const CommonInputField = dynamic(() => import('@/common/CommonInputString'));
const CommonFieldError = dynamic(() => import('@/common/CommonFieldError'));

const ChangePasswordComponent = () => {
    return (
        <div className="px-5">
            <Formik
                enableReinitialize={true}
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }}
                onSubmit={() => {
                    successToast('Register Successfully'); // Call the toast notification here
                }}
                validationSchema={changePasswordSchema}
            >
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => {
                    return (
                        <Form
                            onSubmit={handleSubmit}
                            noValidate
                            className="divide-y-1 divide-neutral-200"
                        >
                            <div className="py-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-neutral-700">
                                    Change Password
                                </h2>
                            </div>
                            <div className="py-4 flex flex-col gap-4">
                                <h4 className="font-semibold text-neutral-700">
                                    Address Information
                                </h4>
                                <div className="flex flex-col lg:flex-row gap-4">
                                    {[
                                        {
                                            label: 'Current Password',
                                            inputAttributes: {
                                                placeholder: 'Current Password',
                                                id: 'currentPassword',
                                                name: 'currentPassword',
                                                value: values.currentPassword
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        },
                                        {
                                            label: 'New Password',
                                            inputAttributes: {
                                                placeholder: 'New Password',
                                                id: 'newPassword',
                                                name: 'newPassword',
                                                value: values.newPassword
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        },
                                        {
                                            label: 'Confirm Password',
                                            inputAttributes: {
                                                placeholder: 'Confirm Password',
                                                id: 'confirmPassword',
                                                name: 'confirmPassword',
                                                value: values.confirmPassword
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        }
                                    ].map((item, index) => {
                                        return (
                                            <div key={index} className="w-full lg:w-1/3">
                                                <div className="flex flex-col md:flex-row items-center mb-3 gap-2">
                                                    <div className="w-full lg:w-1/3">
                                                        <label
                                                            className="block text-sm font-semibold text-neutral-700 mb-0"
                                                            htmlFor={item.inputAttributes.id}
                                                        >
                                                            {item.label}
                                                        </label>
                                                    </div>
                                                    <div className="w-full md:w-2/3">
                                                        <div className="relative">
                                                            <CommonInputField
                                                                inputAttributes={{
                                                                    placeholder:
                                                                        item.inputAttributes
                                                                            .placeholder,
                                                                    id: item.inputAttributes.id,
                                                                    name: item.inputAttributes.name,
                                                                    value: item.inputAttributes
                                                                        .value,
                                                                    type: 'password'
                                                                }}
                                                                onChange={item.onChange}
                                                                onFocus={item.onFocus}
                                                                onBlur={item.onBlur}
                                                            />
                                                            <CommonFieldError
                                                                errorText={
                                                                    errors[
                                                                        item?.inputAttributes
                                                                            ?.id as keyof typeof errors
                                                                    ] || ''
                                                                }
                                                                isError={
                                                                    (errors[
                                                                        item?.inputAttributes
                                                                            ?.id as keyof typeof errors
                                                                    ] &&
                                                                        touched[
                                                                            item?.inputAttributes
                                                                                ?.id as keyof typeof touched
                                                                        ]) ||
                                                                    false
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="py-4 flex justify-end gap-4">
                                <div className="scale-110">
                                    <CommonButton type={PRIMARY} buttonType="submit">
                                        Update
                                    </CommonButton>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default ChangePasswordComponent;
