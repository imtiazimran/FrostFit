/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://frostfitserver.vercel.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)

        }
        return headers
    }
})

const interceptor: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    const result = await baseQuery(args, api, extraOptions)
    console.log(result)
    return result
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: interceptor,
    tagTypes: ["baseApi"],
    endpoints: () => ({})
})