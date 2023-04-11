//for making store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer },
  });
}

export const wrapper = createWrapper(makeStore, { debug: false });
