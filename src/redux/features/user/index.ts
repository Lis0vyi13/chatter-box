import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/types/user";

interface UserState {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: UserState = { isAuth: false, user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register() {
      console.log("register");
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
