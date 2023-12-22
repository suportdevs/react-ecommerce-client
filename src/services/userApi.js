import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL,
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your state
            const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).user.token;
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
          },
        }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (_new) => _new ? `/users?new=true` : '/users',
        }),
        getUserStats: builder.query({
            query: () => '/users/stats',
        }),
    }),
});

export const {useGetUsersQuery, useGetUserStatsQuery} = userApi;