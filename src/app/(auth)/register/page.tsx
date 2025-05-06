'use client';

// import required modules
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components and Constants
import CommonButton from '@/common/CommonButton';
import CommonFieldError from '@/common/CommonFieldError';
import CommonInputField from '@/common/CommonInputString';
import CommonTextLink from '@/common/CommonTextLink';
import { PRIMARY } from '@/lib/constants';
import { successToast } from '@/lib/toast';
import { registerSchema } from '../_schemas/registerSchema';

const Register = () => {
    const router = useRouter();
    return (
        <section>
            <div className="md:max-w-7xl w-full flex flex-col flex-wrap md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-200 rounded-xs bg-white shadow-[0px_2px_30px_#ccc6] h-[32rem]">
                {/* Left Section */}
                <div className="w-full md:w-8/12 p-6 md:p-10">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        width={64}
                        height={64}
                        className="mb-6 md:mb-8"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Register</h1>
                    <p className="text-gray-600 mb-6 md:mb-8">
                        Sign up for Access your all-in-one business solution.
                    </p>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            fullname: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        onSubmit={() => {
                            successToast('Register Successfully'); // Call the toast notification here
                            router.push('/login');
                        }}
                        validationSchema={registerSchema}
                    >
                        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => {
                            return (
                                <Form onSubmit={handleSubmit} noValidate>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="fullname"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Full Name
                                                </label>
                                                <CommonInputField
                                                    inputAttributes={{
                                                        placeholder: 'Enter your fullname here',
                                                        id: 'fullname',
                                                        name: 'fullname',
                                                        disabled: false,
                                                        defaultValue: ''
                                                    }}
                                                    onChange={() => {}}
                                                    onFocus={() => {}}
                                                    onBlur={() => {}}
                                                />
                                                {
                                                    <CommonFieldError
                                                        errorText={errors?.fullname || ''}
                                                        isError={
                                                            (errors?.fullname &&
                                                                touched?.fullname) ||
                                                            false
                                                        }
                                                    />
                                                }
                                            </div>

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
                                                    onFocus={() => {}}
                                                />
                                                {
                                                    <CommonFieldError
                                                        errorText={errors?.email || ''}
                                                        isError={
                                                            (errors?.email && touched?.email) ||
                                                            false
                                                        }
                                                    />
                                                }
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                        value: values?.password
                                                    }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onFocus={() => {}}
                                                />
                                                {
                                                    <CommonFieldError
                                                        errorText={errors?.password || ''}
                                                        isError={
                                                            (errors?.password &&
                                                                touched?.password) ||
                                                            false
                                                        }
                                                    />
                                                }
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="confirmPassword"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Confirm Password
                                                </label>
                                                <CommonInputField
                                                    inputAttributes={{
                                                        placeholder: 'Re-enter your password here',
                                                        id: 'confirmPassword',
                                                        name: 'confirmPassword',
                                                        type: 'password',
                                                        disabled: false,
                                                        value: values?.confirmPassword
                                                    }}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onFocus={() => {}}
                                                />
                                                {
                                                    <CommonFieldError
                                                        errorText={errors?.confirmPassword || ''}
                                                        isError={
                                                            (errors?.confirmPassword &&
                                                                touched?.confirmPassword) ||
                                                            false
                                                        }
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-6">
                                        <CommonButton type={PRIMARY} buttonType="submit">
                                            Register
                                        </CommonButton>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                    <div className="flex items-center justify-between mt-2">
                        <div className="text-sm">{`Already have an account?`}</div>
                        <div className="text-sm">
                            <CommonTextLink href="/login">Sign in now</CommonTextLink>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:block w-full md:w-4/12 p-6 md:p-10">
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

export default Register;
