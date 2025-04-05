import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducers: How to do.It actually change the data in the store based on the actions
    // data is in action
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
const { reducer, actions } = userSlice;
export const { setUser } = actions;
export default reducer;
