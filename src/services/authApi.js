import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_BASE_URL}),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
        }),
        resetPasswordSendLink: builder.mutation({
            query: (data) => ({
                url: '/forgot-password',
                method: 'POST',
                body: data
            }),
        }),
        addNewPassword: builder.mutation({
            query: (data) => ({
                url: '/reset-password',
                method: 'POST',
                body: data
            }),
        }),
    }),
});

export const {useRegisterMutation, useLoginMutation, useResetPasswordSendLinkMutation, useAddNewPasswordMutation} = authApi