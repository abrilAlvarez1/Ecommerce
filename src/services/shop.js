import { base_url } from "../database"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shopAPI = createApi({
    reducerPath:"shopAPI",
    baseQuery: fetchBaseQuery({baseUrl:base_url}), // le paso la url para mis peticiones
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:(category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories:builder.query({
            query:() => "categories.json"
        }),
    })
    
})

export const {useGetProductsQuery, useGetCategoriesQuery} = shopAPI