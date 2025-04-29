// This hook checks if the user is authenticated by checking for a token in local storage.

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('master-key');
        const isAuthRoute = router.pathname.startsWith('/dashboard');

        if (!token && isAuthRoute) {
            router.replace('/login');
        }
    }, [router]);
};
