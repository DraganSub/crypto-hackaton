import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services";
import { coinApi } from "../services";

export const store = configureStore({
    reducer: {
        [coinApi.reducerPath]: coinApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(coinApi.middleware, newsApi.middleware),
});
