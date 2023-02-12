
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appState";
import formNav from "./formNavState";

export const store = configureStore({
  reducer: {
    app: appReducer,
    formNav: formNav
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
