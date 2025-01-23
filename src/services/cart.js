import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const cartAPI = createApi({
    reducerPath:"cartAPI",
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    tagTypes:["addProduct", "deleteProduct"],
    endpoints:(builder)=> ({
        getCart:builder.query({
            query:({localId}) => `carts/${localId}.json`,
            transformErrorResponse:(response) => {
                if(!response){
                    return null
                }
                const data = Object.entries(response).map(item => ({...item[1],id:item[0]}))
                return data
            },
            providesTags:["addProduct", "deleteProduct"]
        }),
        postCart:builder.mutation({
            query:({localId,cartProduct}) => ({
                url:`carts/${localId}/${cartProduct.id}.json`,
                method:"PUT",
                body:cartProduct
            }),
            invalidatesTags:["addProduct"]
        }),
        deleteCartProduct:builder.mutation({
            query:({localId}) => ({
                url:`carts/${localId}.json`,
                method:"DELETE"
            }),
            invalidatesTags:["deleteProduct"]
        })
    })
})

export const { useGetCartQuery, 
    usePostCartMutation,
    useDeleteCartProductMutation,
} = cartAPI