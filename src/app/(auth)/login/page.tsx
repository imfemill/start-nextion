'use client';

import CommonButton from '@/common/CommonButton';
import CommonInputField from '@/common/CommonInputString';
import { PRIMARY } from '@/lib/constants';
import { Form, Formik } from 'formik';
import Image from 'next/image';

const Login = () => {
    return (
        <section className="overflow-y-auto fixed flex items-center justify-center h-full w-full bg-[url('/images/auth.png')] bg-white/50 bg-blend-difference bg-cover">
            <div className="max-w-4xl min-w-4xl flex divide-x-2 divide-neutral-200 rounded-xs bg-white shadow-[0px_2px_30px_#ccc6]">
                <div className="w-[56%] p-10">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        width={64}
                        height={64}
                        className="mb-8"
                    />
                    <h1 className="text-3xl font-bold mb-2">Sign In</h1>
                    <p className="text-gray-600 mb-8">Access your all-in-one business solution.</p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.warn(values);
                        }}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
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
                                <div className="w-full">
                                    <CommonButton type={PRIMARY} buttonType="submit">
                                        Primary Button
                                    </CommonButton>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="w-[44%] p-10">part 2</div>
            </div>
        </section>
    );
};

export default Login;
