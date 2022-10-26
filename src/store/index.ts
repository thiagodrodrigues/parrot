import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
})

export type RouteStore = ReturnType<typeof store.getState>
