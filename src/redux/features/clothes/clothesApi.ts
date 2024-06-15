/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@/redux/api/baseApi";

// Define tag types
const TagTypes = {
    CLOTHES: 'Clothes' as const,
    CLOTH: 'Cloth' as const,
    STATS: 'Stats' as const,
};

const clothesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query({
            query: () => ({
                url: "/clothes",
                method: "GET"
            }),
            providesTags: (_result = [], _error, _arg) =>
                _result ? [{ type: TagTypes.CLOTHES, id: 'LIST' }] : [],
        }),
        getCloth: build.query({
            query: (id) => ({
                url: `/cloth/${id}`,
                method: "GET",
            }),
            providesTags: (_result, _error, id) => [{ type: TagTypes.CLOTH, id }],
        }),
        createCloth: build.mutation({
            query: (data) => ({
                url: "/cloth",
                method: "POST",
                body: data
            }),
            invalidatesTags: [{ type: TagTypes.CLOTHES, id: 'LIST' }],
        }),
        updateCloth: build.mutation({
            query: (data) => ({
                url: `/cloth/${data.id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{ type: TagTypes.CLOTH, id: 'LIST' }, { type: TagTypes.CLOTHES, id: 'LIST' }],
        }),
        deleteCloth: build.mutation({
            query: (id) => ({
                url: `/cloth/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: TagTypes.CLOTH, id: 'LIST' }, { type: TagTypes.CLOTHES, id: 'LIST' }],
        }),
        getStatistics: build.query({
            query: () => ({
                url: "/statistics",
                method: "GET"
            }),
            providesTags: [{ type: TagTypes.STATS }],
        }),
        donateCloth: build.mutation({
            query: (data) => ({
                url: `/donate`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [{ type: TagTypes.STATS }, { type: TagTypes.CLOTH }, { type: TagTypes.CLOTHES, id: 'LIST' }],
        })
    })
});

export const {
    useCreateClothMutation,
    useUpdateClothMutation,
    useDeleteClothMutation,
    useGetClothQuery,
    useGetClothesQuery,
    useDonateClothMutation,
    useGetStatisticsQuery
} = clothesApi;
