import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
  user: object | null;
}

const initialState: UserState = { isLogin: false, user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register() {
      console.log("register");
    },
    setUser(state, action: PayloadAction<object>) {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
