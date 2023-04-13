//for performing async task we create asyncthunk in our slice
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store/store";

//slice name / task we want to perform
export const fetchUsers = createAsyncThunk(
  "users/getUsers",
  async (thunkApi) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=2"
    );

    const data = await response.json();
    return data;
  }
);

//import all data at once and type can use used on other page.
export interface userState {
  users: Array<[]>;
  value: number;
}

const initialState: userState = {
  users: [],
  value: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ value: number }>): void => {
      state.value += action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.push(...action.payload);
    });
  },
});

export default userSlice.reducer;

export const { increment } = userSlice.actions;
export const getUsersState = (state: AppState): userState => state.user;
