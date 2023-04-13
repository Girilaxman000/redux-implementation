//for making store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import { createWrapper } from "next-redux-wrapper";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function makeStore() {
  return configureStore({ reducer: rootReducer });
}

export const wrapper = createWrapper(makeStore, { debug: false });
