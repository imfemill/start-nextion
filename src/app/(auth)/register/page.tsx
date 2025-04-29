'use client';

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
        <main className="p-5 h-screen">
            <section className="bg-light h-full p-5">
                <div className="p-5 gap-5 flex flex-col">
                    <h1 className="text-2xl font-bold text-primaryDark">Register</h1>
                </div>
            </section>
        </main>
    );
}
