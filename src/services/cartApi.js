import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL}),
    endpoints: (builder) => ({
        checkoutPayment : builder.mutation({
            query: (data) => ({
                url: '/checkout/payment',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useCheckoutPaymentMutation} = cartApi;