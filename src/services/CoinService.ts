import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { coin, coins } from "../types";
//ako crkne email
//https://www.emailnator.com/inbox/pjxwfwl@femailtor.com/MTg1ZDRlYjQyMzlmMzAwZg==
const URL = "https://coinranking1.p.rapidapi.com/";
const options = {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        getCoins: build.query<coins, string>({
            query: () => ({
                url: `coins?orderBy=marketCap&orderDirection=desc&limit=100&offset=0`,
                headers: options,
            }),
            transformResponse: (response: { data: coins }) => {
                return response.data;
            },
        }),
        getCoin: build.query<coin, string>({
            query: (id: string) => ({
                url: `coin/${id}`,
                headers: options,
            }),
            transformResponse: (response: { data: { coin: coin } }) => {
                return response.data.coin;
            },
        }),
        getCoinHistory: build.query<coin, { id: string; period: string }>({
            query: ({ id, period }) => ({
                url: `coin/${id}/history?timePeriod=${period}`,
                headers: options,
            }),
        }),
    }),
});

export const { useGetCoinsQuery, useGetCoinQuery, useGetCoinHistoryQuery } =
    coinApi;
