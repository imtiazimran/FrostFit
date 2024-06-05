import { baseApi } from "@/redux/api/baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: "/users",
                method: "GET"
            })
        }),
        getUser: build.query({
            query: () => ({
                url: `/user`,
                method: "GET"
            })
        })
    })
}) 

export const { useGetUsersQuery, useGetUserQuery } = usersApi