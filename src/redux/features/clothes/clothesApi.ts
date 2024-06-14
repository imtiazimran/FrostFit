import { baseApi } from "@/redux/api/baseApi";

const clothesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query({
            query: () => ({
                url: "/clothes",
                method: "GET"
            })
        }),
        getCloth: build.query({
            query: () => ({
                url: `/cloth`,
                method: "GET"
            })
        }),
        createCloth: build.mutation({
            query: (data) => ({
                url: "/cloth",
                method: "POST",
                body: data
            })
        }),
        updateCloth: build.mutation({
            query: (data) => ({
                url: "/updateCloth",
                method: "PATCH",
                body: data
            })
        }),
        deleteCloth: build.mutation({
            query: (data) => ({
                url: "/cloth",
                method: "DELETE",
                body: data
            })
        }),
    })

})

export const {
    useCreateClothMutation,
    useUpdateClothMutation,
    useDeleteClothMutation,
    useGetClothQuery,
    useGetClothesQuery
} = clothesApi