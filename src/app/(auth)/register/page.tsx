'use client';

import Image from 'next/image';

export default function Register() {
    /* 
    const router = useRouter();

    const [postUserSignInData] = usePostUserSignInDataMutation();

    const handleRegister = async () => {
        postUserSignInData({
            email: '',
            password: ''
        }).then((res) => {
            // You'd get a token from your API here
            const fakeToken = res?.data?.data?.token;

            // Save token to cookie
            document.cookie = `master-key=${fakeToken}; path=/`;

            router.push('/dashboard');
        });
    }; 
    */

    return (
        <section className="relative h-screen w-full">
            <div>Register</div>
            <Image src={'/auth.png'} alt="Profile" height={100} width={100} />
        </section>
    );
}
