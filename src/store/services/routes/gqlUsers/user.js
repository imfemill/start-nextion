import { serverApi } from 'Redux/serverApi';
import { gqlBody } from '../../../../gqlBody';

// Create a userAuth object using serverApi.injectEndpoints
const user = serverApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (payload) => ({
                body: gqlBody.getUser(payload)
            }),
            providesTags: ['userList']
        }),
        addUser: builder.mutation({
            query: (payload) => ({
                body: gqlBody.addUser(payload)
            }),
            invalidatesTags: ['userList', 'AgentList', 'LenderList']
        }),
        editUser: builder.mutation({
            query: (payload) => ({
                body: gqlBody.editUser(payload)
            }),
            invalidatesTags: ['userList', 'AgentList', 'LenderList']
        }),
        deleteUser: builder.mutation({
            query: (payload) => ({
                body: gqlBody.deleteUser(payload)
            }),
            invalidatesTags: ['userList', 'AgentList', 'LenderList']
        })
    }),
    // Do not override existing endpoints
    overrideExisting: false
});

export const { useGetUserQuery, useAddUserMutation, useEditUserMutation, useDeleteUserMutation } =
    user;
