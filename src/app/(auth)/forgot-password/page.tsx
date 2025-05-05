'use client';

// import required modules
import { Form, Formik } from 'formik';
import Image from 'next/image';

// Components and Constants
import CommonButton from '@/common/CommonButton';
import CommonInputField from '@/common/CommonInputString';
import CommonTextLink from '@/common/CommonTextLink';
import { PRIMARY } from '@/lib/constants';

const ForgotPassword = () => {
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
                        initialValues={{ email: '' }}
                        onSubmit={(values) => {
                            console.warn(values);
                        }}
                    >
                        {({ handleSubmit }) => (
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
                                                defaultValue: ''
                                            }}
                                            onChange={() => {}}
                                            onFocus={() => {}}
                                            onBlur={() => {}}
                                        />
                                    </div>
                                    <div className="w-full mt-2">
                                        <CommonButton type={PRIMARY} buttonType="submit">
                                            Submit
                                        </CommonButton>
                                    </div>
                                </div>
                            </Form>
                        )}
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
