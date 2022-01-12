import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import roomReducer from "../features/room/roomSlice";
import messageReducer from "../features/message/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    message: messageReducer,
  },
});
