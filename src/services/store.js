import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import cartSlice from "./cartSlice";
import {cartApi} from "./cartApi";
import { authApi } from "./authApi";
import userSlice from "./userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { userApi } from "./userApi";
import { orderApi } from "./orderApi";

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer = combineReducers({
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        cart: cartSlice, 
        user: userSlice
    });

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(productApi.middleware).concat(cartApi.middleware).concat(authApi.middleware).concat(userApi.middleware).concat(orderApi.middleware),
});

// setupListeners(store.dispatch);

export let persistor = persistStore(store)