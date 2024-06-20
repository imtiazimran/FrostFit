import { baseApi } from "@/redux/api/baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: "/users",
                method: "GET"
            }),
            providesTags: ["Users"]
        }),
        getUser: build.query({
            query: () => ({
                url: `/user`,
                method: "GET"
            })
        }),
        updateUserRole: build.mutation({
            query: ({ id, role }: {id: string, role: string}) => ({
                url: `/user/${id}`,
                method: 'PATCH',
                body: { role },
            }),
            invalidatesTags: ["Users"],
        }),
    })
})

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserRoleMutation } = usersApi