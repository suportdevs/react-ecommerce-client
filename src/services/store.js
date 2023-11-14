import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { productApi } from "./productApi";
import cartSlice from "./cartSlice";
import {cartApi} from "./cartApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);