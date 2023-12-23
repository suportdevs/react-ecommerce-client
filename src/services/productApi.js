import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
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
        getProducts: builder.query({
            query: (category) => category ? `/products?category=${category}` : '/products',
        }),
        findProduct: builder.query({
            query: (id) => `/products/find/${id}`,
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {useGetProductsQuery, useFindProductQuery, useDeleteProductByIdMutation} = productApi;