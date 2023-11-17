import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { productApi } from "./productApi";
import cartSlice from "./cartSlice";
import {cartApi} from "./cartApi";
import { authApi } from "./authApi";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(cartApi.middleware).concat(authApi.middleware),
});

setupListeners(store.dispatch);