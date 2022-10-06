import { configureStore } from '@reduxjs/toolkit'
import myOrdersSlice from './reducers/order/myOrdersSlice'
import allProductsSlice from './reducers/product/allProductsSlice'
import basketSlice from './reducers/product/basketSlice'
import counterSlice from './reducers/product/counterSlice'
import isAddingNewProductSlice from './reducers/product/isAddingNewProductSlice'
import isEditingSlice from './reducers/product/isEditingSlice'
import productSlice from './reducers/product/productSlice'
import subtotalSlice from './reducers/product/subtotalSlice'
import createUserSlice from './reducers/user/createUserSlice'
import userExistsLoginUiSlice from './reducers/user/userExistsLoginUiSlice'
import userExistsRegisterUiSlice from './reducers/user/userExistsRegisterUiSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    subtotal: subtotalSlice,
    basket: basketSlice,
    allProducts: allProductsSlice,
    product: productSlice,
    isEditing: isEditingSlice,
    isAddingNewProduct: isAddingNewProductSlice,
    createUser: createUserSlice,
    userExists: userExistsLoginUiSlice,
    isNewUser: userExistsRegisterUiSlice,
    myOrders: myOrdersSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch