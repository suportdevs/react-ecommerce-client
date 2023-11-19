import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
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

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer = combineReducers({
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
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
      }).concat(productApi.middleware).concat(cartApi.middleware).concat(authApi.middleware),
});

// setupListeners(store.dispatch);

export let persistor = persistStore(store)