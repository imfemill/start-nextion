'use client';

// import required modules
import { deleteCookie, getCookie, setCookie } from 'cookies-next/client';
import CryptoJS from 'crypto-js';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components and Constants
import CommonButton from '@/common/CommonButton';
import CommonButtonLoader from '@/common/CommonButtonLoader';
import CommonCheckbox from '@/common/CommonCheckbox';
import CommonFieldError from '@/common/CommonFieldError';
import CommonInputField from '@/common/CommonInputString';
import CommonTextLink from '@/common/CommonTextLink';
import { PRIMARY } from '@/lib/constants';
import { successToast } from '@/lib/toast';
import { useUserLoginMutation } from '@/store/services/auth/authApi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSchema } from '../_schemas/loginSchemas';
import { setCurrentUser } from '@/store/context/userSlice';

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [userLogin, { isLoading }] = useUserLoginMutation();
    const signin_secret = process.env.NEXT_PUBLIC_SIGNIN_REMEMBER_ME_SECRET;

    // Function to encrypt data
    const encryptData = (data: string): string => {
        if (!signin_secret) {
            throw new Error('Encryption secret is not defined');
        }
        return CryptoJS.AES.encrypt(data, signin_secret).toString();
    };

    if (!signin_secret) {
        throw new Error('Decryption secret is not defined');
    }

    // Function to decrypt data
    const decryptData = (data: string): string => {
        const bytes = CryptoJS.AES.decrypt(data, signin_secret);
        return bytes.toString(CryptoJS.enc.Utf8);
    };

    // Retrieve saved credentials from localStorage using custom hook
    const storedEmail = getCookie('email');
    const storedPassword = getCookie('password');

    const getSavedCredentials = () => {
        if (storedEmail && storedPassword) {
            const decryptedEmail = decryptData(storedEmail);
            const decryptedPassword = decryptData(storedPassword);
            return { email: decryptedEmail, password: decryptedPassword };
        }
        return null;
    };

    const credentials = getSavedCredentials();

    // State to manage "Remember me" checkbox
    const [isChecked, setIsChecked] = useState<boolean>(!!(storedEmail && storedPassword));

    const handleSubmit = async (values: { email: string; password: string }) => {
        const { email, password } = values;
        userLogin({
            email: values?.email,
            password: values?.password
        }).then((result) => {
            if ('data' in result) {
                const { data } = result;
                dispatch(setCurrentUser(data));
                setCookie('master-key', email);

                if (isChecked) {
                    const encryptedEmail = encryptData(email);
                    const encryptedPassword = encryptData(password);
                    setCookie('email', encryptedEmail);
                    setCookie('password', encryptedPassword);
                } else {
                    deleteCookie('email');
                    deleteCookie('password');
                }

                successToast('Login Successfully'); // Call the toast notification here
                router.push('/dashboard');
            }
        });
    };
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
                        enableReinitialize={true}
                        initialValues={{
                            email: credentials?.email || '',
                            password: credentials?.password || ''
                        }}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                        validationSchema={loginSchema}
                    >
                        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => {
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
                                                onFocus={() => {}}
                                            />
                                            {
                                                <CommonFieldError
                                                    errorText={errors?.email || ''}
                                                    isError={
                                                        (errors?.email && touched?.email) || false
                                                    }
                                                />
                                            }
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
                                                        (errors?.password && touched?.password) ||
                                                        false
                                                    }
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center">
                                            <CommonCheckbox
                                                options={[
                                                    {
                                                        id: 'rememberMe',
                                                        value: 'rememberMe',
                                                        label: 'Remember me',
                                                        disabled: false,
                                                        checked: isChecked
                                                    }
                                                ]}
                                                name="radio-button"
                                                onChange={(e) => {
                                                    setIsChecked(e.target.checked);
                                                }}
                                            />
                                        </div>
                                        <div className="text-sm">
                                            <CommonTextLink href="/forgot-password">
                                                Forgot your password?
                                            </CommonTextLink>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <CommonButton
                                            type={PRIMARY}
                                            buttonType="submit"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? <CommonButtonLoader /> : 'Sign In'}
                                        </CommonButton>
                                    </div>
                                </Form>
                            );
                        }}
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
