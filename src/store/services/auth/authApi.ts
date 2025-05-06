import { serverApi } from '@/store/serverApi';

export const authApi = serverApi
    .enhanceEndpoints({ addTagTypes: ['CurrentUser'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            userLogin: builder.mutation({
                query: (values) => ({
                    url: '/login',
                    method: 'POST',
                    body: values
                }),
                invalidatesTags: ['CurrentUser']
            }),
            userRegister: builder.mutation({
                query: (data) => ({
                    url: '/register',
                    method: 'POST',
                    body: data
                })
            }),
            userForgotPassword: builder.mutation({
                query: (data) => ({
                    url: '/forgot-password',
                    method: 'POST',
                    body: data
                })
            })
        }),
        overrideExisting: false
    });

export const { useUserLoginMutation, useUserRegisterMutation, useUserForgotPasswordMutation } =
    authApi;
