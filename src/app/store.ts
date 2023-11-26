import { configureStore } from "@reduxjs/toolkit";
import { wbApi } from "../api";

export const store = configureStore({
  reducer: { [wbApi.reducerPath]: wbApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wbApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
