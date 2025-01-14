import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer, // hold actual state
  },
});
