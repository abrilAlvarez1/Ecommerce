import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json"
import categories from "../data/categories.json"

export const shopSlice = createSlice({
    name:"shop",
    initialState:{
        categories: categories,
        products: products,
        productsFilteredByCategory:[]
    },
    reducers:{
        setProductsFilteredByCategory:(state, actions) => {
            state.productsFilteredByCategory = state.products.filter(product => product.category === actions.payload)
        }
    }

})

export const {setProductsFilteredByCategory} = shopSlice.actions

export default shopSlice.reducer