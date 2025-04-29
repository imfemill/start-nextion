import { serverApi } from '@/store/serverApi';

export const authApi = serverApi.enhanceEndpoints({ addTagTypes: ['User'] }).injectEndpoints({
    endpoints: (builder) => ({
        postUserSignInData: builder.mutation({
            query: (values) => ({
                url: '/login',
                method: 'POST',
                body: values
            }),
            invalidatesTags: ['User']
        }),
        postUserSignUpData: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        }),
        postForgetPasswordData: builder.mutation({
            query: (data) => ({
                url: '/forgot-password',
                method: 'POST',
                body: data
            })
        })
    }),
    overrideExisting: false
});

export const {
    usePostForgetPasswordDataMutation,
    usePostUserSignUpDataMutation,
    usePostUserSignInDataMutation
} = authApi;
