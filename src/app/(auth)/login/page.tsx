'use client';

// import required modules
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next/client';
import { Form, Formik } from 'formik';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components and Constants
import { PRIMARY } from '@/lib/constants';
import CommonButton from '@/common/CommonButton';
import CommonTextLink from '@/common/CommonTextLink';
import CommonCheckbox from '@/common/CommonCheckbox';
import CommonInputField from '@/common/CommonInputString';

const Login = () => {
    const router = useRouter();
    return (
        <section>
            <div className="md:max-w-4xl w-full flex flex-col flex-wrap md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-200 rounded-xs bg-white shadow-[0px_2px_30px_#ccc6]">
                {/* Left Section */}
                <div className="w-full md:w-7/12 p-6 md:p-10">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        width={64}
                        height={64}
                        className="mb-6 md:mb-8"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Sign In</h1>
                    <p className="text-gray-600 mb-6 md:mb-8">
                        Access your all-in-one business solution.
                    </p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.warn(values);
                            setCookie('master-key', values.email);
                            router.push('/dashboard');
                        }}
                    >
                        {({ handleSubmit, handleChange, handleBlur }) => (
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
                                            onChange={handleChange}
                                            onFocus={() => {}}
                                            onBlur={handleBlur}
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
                                                id: 'password',
                                                name: 'password',
                                                type: 'password',
                                                disabled: false,
                                                defaultValue: ''
                                            }}
                                            onChange={handleChange}
                                            onFocus={() => {}}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="flex items-center">
                                        <CommonCheckbox
                                            options={[
                                                {
                                                    id: 'forgot-password',
                                                    value: 'forgot-password',
                                                    label: 'Remember me',
                                                    disabled: false,
                                                    checked: true
                                                }
                                            ]}
                                            name="radio-button"
                                            onChange={(/* e */) => {}}
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <CommonTextLink href="/forgot-password">
                                            Forgot your password?
                                        </CommonTextLink>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <CommonButton type={PRIMARY} buttonType="submit">
                                        Sign In
                                    </CommonButton>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex items-center justify-between mt-2">
                        <div className="text-sm">{`Don't have an account?`}</div>
                        <div className="text-sm">
                            <CommonTextLink href="/register">Register now</CommonTextLink>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:block w-full md:w-5/12 p-6 md:p-10">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                            type: 'bullets',
                            bulletClass: 'swiper-pagination-bullet'
                        }}
                        modules={[Pagination, Autoplay]}
                        className="h-full !mb-5"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <Image
                                src="/images/auth-secure-login.png"
                                alt="Secure Access Control"
                                sizes="100vw"
                                width={512}
                                height={512}
                                className="mb-6 md:mb-8"
                            />
                            <h1 className="text-lg md:text-xl font-bold mb-2 text-center">
                                Secure Access Control
                            </h1>
                            <p className="text-neutral-500 text-center">
                                Granular permission settings ensure the right people have access to
                                the right tools at the right time.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/images/auth-things-to-say.png"
                                alt="Centralized Dashboard"
                                sizes="100vw"
                                width={512}
                                height={512}
                                className="mb-6 md:mb-8"
                            />
                            <h1 className="text-lg md:text-xl font-bold mb-2 text-center">
                                Centralized Dashboard
                            </h1>
                            <p className="text-neutral-500 text-center">
                                Track customer activity, manage user roles, and monitor system
                                metrics — all from one intuitive interface.
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Login;
