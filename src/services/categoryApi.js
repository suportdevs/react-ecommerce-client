import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BACKEND_URL}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories',
        }),
    }),
});

export const {useGetCategoriesQuery} = categoryApi;