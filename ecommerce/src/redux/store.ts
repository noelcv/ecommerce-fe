import { configureStore } from '@reduxjs/toolkit'
import allProductsSlice from './reducers/product/allProductsSlice'
import basketSlice from './reducers/product/basketSlice'
import counterSlice from './reducers/product/counterSlice'
import isAddingNewProductSlice, { isAddingNewProduct } from './reducers/product/isAddingNewProductSlice'
import isEditingSlice from './reducers/product/isEditingSlice'
import productSlice from './reducers/product/productSlice'
import subtotalSlice from './reducers/product/subtotalSlice'
import createUserSlice from './reducers/user/createUserSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    subtotal: subtotalSlice,
    basket: basketSlice,
    allProducts: allProductsSlice,
    product: productSlice,
    isEditing: isEditingSlice,
    isAddingNewProduct: isAddingNewProductSlice,
    createUser: createUserSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch