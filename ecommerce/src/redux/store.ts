import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './reducers/basketSlice'
import counterSlice from './reducers/counterSlice'
import subtotalSlice from './reducers/subtotalSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    subtotal: subtotalSlice,
    basket: basketSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch