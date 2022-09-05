import { configureStore } from '@reduxjs/toolkit'
import allProductsSlice from './reducers/allProductsSlice'
import basketSlice from './reducers/basketSlice'
import counterSlice from './reducers/counterSlice'
import isEditingSlice from './reducers/isEditingSlice'
import productSlice from './reducers/productSlice'
import subtotalSlice from './reducers/subtotalSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    subtotal: subtotalSlice,
    basket: basketSlice,
    allProducts: allProductsSlice,
    product: productSlice,
    isEditing: isEditingSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch