import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            state.products = action.payload;
            state.total += action.payload.rate * action.payload.quantity;
        }
    }
});

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;