//for performing async task we create asyncthunk in our slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const initialState = {
  users: [],
  value: 0,
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state, action) => {
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
export const getUsers = (state: any) => state.user.users;
export const getValue = (state: any) => state.user.value;
