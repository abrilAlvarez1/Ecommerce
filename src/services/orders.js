import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ordersAPI = createApi({
    reducerPath:"ordersAPI",
    baseQuery: fetchBaseQuery({baseUrl:base_url}), // le paso la url para mis peticiones
    endpoints: (builder) => ({
       postOrders:builder.mutation({
        query:({...order}) => ({
            url:"orders.json",
            method: "POST",
            body:order
        })
       })        
    })
    
})

export const {usePostOrdersMutation} = ordersAPI