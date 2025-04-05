import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  publicbooks: [],
  selectedbook: {},
};

const bookSlice = createSlice({
  name: "book", //slice name
  initialState,

  // object of reducer function
  // Reducers: How to do.It actually change the data in the store based on the actions
  reducers: {
    //what action do we need in our app
    setbook: (state, action) => {
      state.books = action.payload;
    },
    setpublicbook: (state, action) => {
      state.publicbooks = action.payload;
    },
    setselectedbook: (state, action) => {
      state.selectedbook = action.payload || {};
    },
  },
});
const { reducer, actions } = bookSlice;
export const { setbook, setpublicbook, setselectedbook } = actions;
export default reducer;
