import { baseApi } from "@/redux/api/baseApi";

const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
        }),
        register: build.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = authorization