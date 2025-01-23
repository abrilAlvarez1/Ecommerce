import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopAPI } from "../services/shop"
import { ordersAPI } from "../services/orders"
import { cartAPI } from "../services/cart"
import { userAPI } from "../services/user"
import { authAPI } from "../services/auth"
import userReducer from "../features/userSlice"

export const store = configureStore({
    reducer:{
        shop: shopReducer,
        user:userReducer,
        [shopAPI.reducerPath]: shopAPI.reducer,
        [ordersAPI.reducerPath]:ordersAPI.reducer,
        [authAPI.reducerPath]:authAPI.reducer,
        [userAPI.reducerPath]:userAPI.reducer,
        [cartAPI.reducerPath]:cartAPI.reducer
    },
    middleware: getDefaultMiddleware => 
        (getDefaultMiddleware().concat(shopAPI.middleware, ordersAPI.middleware, authAPI.middleware, userAPI.middleware, cartAPI.middleware ))
})
setupListeners(store.dispatch)