'use client';

import { serverApi } from '@/store/serverApi';

export const userApi = serverApi.enhanceEndpoints({ addTagTypes: ['User'] }).injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.mutation({
            query: (auth) => ({
                url: '/profile',
                method: 'GET',
                headers: { Authorization: `Bearer ${auth}` }
            })
            // providesTags: ["User"],
        })
    }),
    overrideExisting: false
});

export const { useGetUserDataMutation } = userApi;
