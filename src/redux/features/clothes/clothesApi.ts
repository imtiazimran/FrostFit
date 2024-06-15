/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@/redux/api/baseApi";

// Define tag types
const TagTypes = {
    CLOTHES: 'Clothes' as const,
    CLOTH: 'Cloth' as const,
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
            query: (data) => {
                return {
                    url: "/cloth",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: [{ type: TagTypes.CLOTHES, id: 'LIST' }],
        }),
        updateCloth: build.mutation({
            query: (data) => {
                console.log('Update data:', data);
                return {
                    url: `/cloth/${data.id}`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: [TagTypes.CLOTHES, TagTypes.CLOTH],
        }),
        deleteCloth: build.mutation({
            query: (data) => ({
                url: "/cloth",
                method: "DELETE",
                body: data
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: TagTypes.CLOTH, id },
                { type: TagTypes.CLOTHES, id: 'LIST' },
            ],
        }),
    })
});

export const {
    useCreateClothMutation,
    useUpdateClothMutation,
    useDeleteClothMutation,
    useGetClothQuery,
    useGetClothesQuery
} = clothesApi;
