/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import axios from "axios";
import { logout, setUser } from "../features/authentication/authSlice";

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
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {

        console.log("sending refresh token")
        const res = await axios.post(
            "https://frostfitserver.vercel.app/api/v1/refresh",
            {},
            {
                withCredentials: true,
            }
        );

        const data = res?.data;

        if (data?.accessToken) {
            const user = (api.getState() as RootState).auth.user
            api.dispatch(
                setUser({
                    user,
                    token: data?.accessToken
                })
            )
            result = await baseQuery(args, api, extraOptions)
        }
        else {
            api.dispatch(logout())
        }

        

    }


    return result
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: interceptor,
    tagTypes: ["baseApi", "Clothes", "Cloth", "Stats", "Users", "User"],
    endpoints: () => ({})
})