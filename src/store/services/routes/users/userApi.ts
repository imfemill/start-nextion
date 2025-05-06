'use client';

import { errorToast } from '@/lib/toast';
import { serverApi } from '@/store/serverApi';
import { setCurrentUser } from '../../../context/userSlice';

export const userApi = serverApi.enhanceEndpoints({ addTagTypes: ['User'] }).injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: (auth) => ({
                url: '/profile',
                method: 'GET',
                headers: { Authorization: `Bearer ${auth}` }
            }),
            transformErrorResponse: (response: { status: number; data: unknown }) => {
                return response;
            },
            transformResponse(baseQueryReturnValue /* , meta, arg */) {
                if (baseQueryReturnValue?.success) {
                    // Update the user information in the Redux store
                    setCurrentUser(baseQueryReturnValue?.data);
                    return baseQueryReturnValue;
                } else {
                    errorToast(baseQueryReturnValue?.message || 'Failed to fetch user data.');
                    return baseQueryReturnValue;
                }
            }
            // providesTags: ["User"],
        })
    }),
    overrideExisting: false
});

export const { useLazyGetUserDataQuery } = userApi;
