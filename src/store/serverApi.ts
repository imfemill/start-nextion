'use client';

import { errorToast } from '@/lib/toast';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api'
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    try {
        const result = await baseQuery(args, api, extraOptions);

        if (result?.error && [404].includes(result?.error?.originalStatus as number)) {
            errorToast(`404 - Not Found. The requested resource doesn't exist.`);
        }
        if (result?.error && [401, 500].includes(result?.error?.originalStatus as number)) {
            errorToast('Unauthorized or server error');
            localStorage.clear();
        }
        return result;
    } catch {
        errorToast('An error occurred while fetching data');
        return {
            error: {
                status: 'FETCH_ERROR',
                error: 'An error occurred while fetching data'
            }
        };
    }
};

export const serverApi = createApi({
    reducerPath: 'serverApi',
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    tagTypes: [],
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
});
