import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import counterReducer from './features/counter/counterSlice'
import { postApi } from './services/postApi'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
