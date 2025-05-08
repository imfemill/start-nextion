'use client';

import { errorToast } from '@/lib/toast';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api'
});

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error !== null && 'status' in error;
}

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    try {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error && isFetchBaseQueryError(result.error)) {
            const status =
                result.error.status === 'PARSING_ERROR' ? 'PARSING ERROR' : result.error.status;

            if (status === 404) {
                errorToast(`404 - Not Found. The requested resource doesn't exist.`);
            }
            if (status === 401 || status === 500) {
                errorToast('Unauthorized or server error');
                localStorage.clear();
            }
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
