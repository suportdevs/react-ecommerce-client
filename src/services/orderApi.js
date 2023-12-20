import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL,
        prepareHeaders: (headers, {getState}) => {
            const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).user.token;
            if(token){
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => '/orders',
        }),
    }),
});

export const {useGetOrdersQuery} = orderApi;