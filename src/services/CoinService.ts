import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://coinranking1.p.rapidapi.com/";
const options = {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};
type coin = {
    name: string;
};

type coins = {
    coins: coin[];
    stats: {
        total: number;
    };
};
export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        getCoins: build.query<coins, string>({
            query: () => ({
                url: `coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`,
                headers: options,
            }),
            transformResponse: (response: { data: coins }) => {
                return response.data;
            },
        }),
    }),
});

export const { useGetCoinsQuery } = coinApi;
