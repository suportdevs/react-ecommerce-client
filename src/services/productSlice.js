import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        deleteStoreProductById: (state, action) => {
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            );
        }
    },
});

export const {getProducts, deleteStoreProductById} = productSlice.actions;
export default productSlice.reducer;