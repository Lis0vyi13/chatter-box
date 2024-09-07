import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/features/user";
import chatReducer from "@/redux/features/chat";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
