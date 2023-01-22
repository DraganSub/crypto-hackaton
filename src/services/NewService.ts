import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { news } from "../types";

const url = "https://bing-news-search1.p.rapidapi.com/news";

const options = {
    "X-RapidAPI-Key": process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};
export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getNews: build.query<{ value: news[] }, string>({
            query: (limit) => ({
                url: `/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${limit}`,
                headers: options,
            }),
            transformResponse: (response: { value: news[]; sort: [] }) => {
                console.log(response);
                return response;
            },
        }),
    }),
});

export const { useGetNewsQuery } = newsApi;