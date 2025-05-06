'use client';

// import required modules
import { Form, Formik } from 'formik';
import Image from 'next/image';
import * as yup from 'yup';

// Components and Constants
import CommonButton from '@/common/CommonButton';
import CommonInputField from '@/common/CommonInputString';
import CommonTextLink from '@/common/CommonTextLink';
import { PRIMARY } from '@/lib/constants';
import { errorToast } from '@/lib/toast';
import { useRouter } from 'next/navigation';
import { forgotPasswordSchema } from '../_schemas/forgotPasswordSchema';

const ForgotPassword = () => {
    const router = useRouter();
    return (
        <section>
            <div className="md:w-2xl w-full flex flex-col flex-wrap md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-200 rounded-xs bg-white shadow-[0px_2px_30px_#ccc6]">
                <div className="w-full p-6 md:p-10">
                    <div>
                        <div className="flex items-center justify-between flex-row-reverse mb-6 md:mb-8">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={64}
                                height={64}
                                className=""
                            />
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">
                                Forgot Password?
                            </h1>
                        </div>
                        <p className="text-gray-600 mb-6 md:mb-8">
                            {`Don't worry! It happens. Please enter the email address associated with
                            your address`}
                        </p>
                    </div>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            email: ''
                        }}
                        onSubmit={() => {
                            router.push('/login');
                        }}
                        validationSchema={forgotPasswordSchema}
                    >
                        {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
                            return (
                                <Form onSubmit={handleSubmit} noValidate>
                                    <div className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email
                                            </label>
                                            <CommonInputField
                                                inputAttributes={{
                                                    placeholder: 'Enter your text here',
                                                    id: 'email',
                                                    name: 'email',
                                                    disabled: false,
                                                    value: values?.email
                                                }}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onFocus={handleBlur}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <CommonButton
                                                type={PRIMARY}
                                                buttonType="button"
                                                handleClick={async () => {
                                                    try {
                                                        // Validate the email using the yup schema
                                                        await yup
                                                            .string()
                                                            .email('Invalid email format')
                                                            .required('Email is required')
                                                            .validate(values.email);
                                                    } catch {
                                                        // If validation fails, show the error toast
                                                        errorToast(
                                                            errors.email || 'Invalid email format'
                                                        );
                                                    }
                                                }}
                                            >
                                                Submit
                                            </CommonButton>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                    <div className="flex items-center justify-between mt-2">
                        <div className="text-sm">{`Back to sign in.`}</div>
                        <div className="text-sm">
                            <CommonTextLink href="/login">Sign in now</CommonTextLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
