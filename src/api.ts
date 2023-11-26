import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { WB } from "./types/index.ts";

type QueryArg = { country: string; indicator: string };

// Define a service using a base URL and expected endpoints
export const wbApi = createApi({
  reducerPath: "wbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.worldbank.org/v2/",
  }),
  endpoints: (builder) => ({
    getIndicator: builder.query<WB, QueryArg>({
      query: ({ country, indicator }) => ({
        url: `country/${country}/indicator/${indicator}`,
        params: { format: "json" },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIndicatorQuery } = wbApi;
