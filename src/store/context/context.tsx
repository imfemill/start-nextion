'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentUser } from './userSlice';
import { useLazyGetUserDataQuery } from '../services/routes/users/userApi';
import { getCookie } from 'cookies-next/client';

const Context = () => {
    const dispatch = useDispatch();

    // Retrieve user information from the Redux store
    interface RootState {
        userInfo: {
            id?: string;
            name?: string;
            email?: string;
            accessToken?: string;
        };
    }

    const userInfo = useSelector((state: RootState) => state?.userInfo);

    // Hook to fetch user information from the API
    const [getUserData] = useLazyGetUserDataQuery();

    // Update user data in Redux when profile data is successfully fetched
    useEffect(() => {
        // Check if the user is authenticated and their info is not already in the store
        if (getCookie('master-key') && !userInfo?.id) {
            // Fetch user information from the API
            getUserData({}).then((res) => {
                // Dispatch action to update user information in the Redux store
                dispatch(
                    setCurrentUser({
                        id: res?.data?.userId,
                        name: res?.data?.name,
                        email: res?.data?.email,
                        accessToken: res?.data?.token
                    })
                );
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // Return an empty fragment as this component doesn't render any UI
    return <></>;
};

export default Context;
