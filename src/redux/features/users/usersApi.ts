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
        }),
        updateUserRole: build.mutation({
            query: ({ id, role }: {id: string, role: string}) => ({
                url: `users/${id}`,
                method: 'PATCH',
                body: { role },
            }),
        }),
    })
})

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserRoleMutation } = usersApi