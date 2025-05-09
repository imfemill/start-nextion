import { PRIMARY } from '@/lib/constants';
import { successToast } from '@/lib/toast';
import { Form } from 'antd';
import { Formik } from 'formik';
import React from 'react';
import { profileSchema } from './_schemas/profileSchema';
import dynamic from 'next/dynamic';

const CommonButton = dynamic(() => import('@/common/CommonButton'));
const CommonFieldError = dynamic(() => import('@/common/CommonFieldError'));
const GoogleAddressSearch = dynamic(() => import('@/common/CommonGoogleAddressSuggest'));
const CommonInputField = dynamic(() => import('@/common/CommonInputString'));

const ProfileComponent = () => {
    return (
        <div className="px-5">
            <Formik
                enableReinitialize={true}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: ''
                }}
                onSubmit={() => {
                    successToast('Register Successfully'); // Call the toast notification here
                }}
                validationSchema={profileSchema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    errors,
                    touched
                }) => {
                    return (
                        <Form
                            onFinish={handleSubmit}
                            noValidate
                            className="divide-y-1 divide-neutral-200"
                        >
                            <div className="py-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-neutral-700">Profile</h2>
                            </div>
                            <div className="py-4 flex flex-col gap-4">
                                <h4 className="font-semibold text-neutral-700">
                                    Basic Information
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            label: 'First Name',
                                            inputAttributes: {
                                                placeholder: 'First Name',
                                                id: 'firstName',
                                                name: 'firstName',
                                                value: values['firstName']
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        },
                                        {
                                            label: 'Last Name',
                                            inputAttributes: {
                                                placeholder: 'Last Name',
                                                id: 'lastName',
                                                name: 'lastName',
                                                value: values['lastName']
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        },
                                        {
                                            label: 'Email',
                                            inputAttributes: {
                                                placeholder: 'Email',
                                                id: 'email',
                                                name: 'email',
                                                value: values['email']
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        },
                                        {
                                            label: 'Phone Number',
                                            inputAttributes: {
                                                placeholder: 'Phone Number',
                                                id: 'phone',
                                                name: 'phone',
                                                value: values['phone']
                                            },
                                            onChange: handleChange,
                                            onFocus: () => {},
                                            onBlur: handleBlur
                                        }
                                    ].map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col md:flex-row items-center mb-3 gap-2"
                                            >
                                                <div className="w-full md:w-1/3">
                                                    <label
                                                        className="block text-sm font-semibold text-neutral-700"
                                                        htmlFor={item?.inputAttributes?.id}
                                                    >
                                                        {item?.label}
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
                                                                value: item.inputAttributes.value
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
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="py-4 flex flex-col gap-4">
                                <h4 className="font-semibold text-neutral-700">
                                    Address Information
                                </h4>
                                <div className="flex flex-col gap-4">
                                    <div className="w-full">
                                        <div className="flex flex-col md:flex-row items-center mb-3 gap-[3px]">
                                            <div className="w-full md:w-1/6">
                                                <label
                                                    className="block text-sm font-semibold text-neutral-700"
                                                    htmlFor="address"
                                                >
                                                    Full Address
                                                </label>
                                            </div>
                                            <div className="w-full md:w-5/6 relative">
                                                <div className="relative w-full">
                                                    <GoogleAddressSearch
                                                        placeholder={'Full Address'}
                                                        id={'address'}
                                                        name={'address'}
                                                        values={values?.address}
                                                        resetValue={() =>
                                                            setFieldValue('address', '')
                                                        }
                                                        handleChange={(e) => {
                                                            setFieldValue('address', e?.address);
                                                        }}
                                                        handleBlur={handleBlur}
                                                    />
                                                    <CommonFieldError
                                                        errorText={errors['address'] || ''}
                                                        isError={
                                                            (errors['address'] &&
                                                                touched['address']) ||
                                                            false
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                label: 'Address 1',
                                                inputAttributes: {
                                                    placeholder: 'Address 1',
                                                    id: 'address1',
                                                    name: 'address1',
                                                    value: values['address1']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            },
                                            {
                                                label: 'Address 2',
                                                inputAttributes: {
                                                    placeholder: 'Address 2',
                                                    id: 'address2',
                                                    name: 'address2',
                                                    value: values['address2']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            },
                                            {
                                                label: 'City',
                                                inputAttributes: {
                                                    placeholder: 'City',
                                                    id: 'city',
                                                    name: 'city',
                                                    value: values['city']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            },
                                            {
                                                label: 'State',
                                                inputAttributes: {
                                                    placeholder: 'State',
                                                    id: 'state',
                                                    name: 'state',
                                                    value: values['state']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            },
                                            {
                                                label: 'Zip/Postal Code',
                                                inputAttributes: {
                                                    placeholder: 'Zip/Postal Code',
                                                    id: 'zipCode',
                                                    name: 'zipCode',
                                                    value: values['zipCode']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            },
                                            {
                                                label: 'Country',
                                                inputAttributes: {
                                                    placeholder: 'Country',
                                                    id: 'country',
                                                    name: 'country',
                                                    value: values['country']
                                                },
                                                onChange: handleChange,
                                                onFocus: () => {},
                                                onBlur: handleBlur
                                            }
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col md:flex-row items-center mb-3 gap-2"
                                            >
                                                <div className="w-full md:w-1/3">
                                                    <label
                                                        className="block text-sm font-semibold text-neutral-700"
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
                                                                value: item.inputAttributes.value
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 flex justify-end gap-4">
                                <div className="scale-110">
                                    <CommonButton type={PRIMARY} buttonType="submit">
                                        Save
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

export default ProfileComponent;
