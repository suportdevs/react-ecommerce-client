import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (category) => category ? `/products?category=${category}` : '/products',
        }),
    }),
});

export const {useGetProductsQuery} = productApi;