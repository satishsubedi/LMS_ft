import { adminFetchBookApi, postNewBookApi } from "./bookApi.js";
import { setbook } from "./bookSlice.js";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};

export const adminFetchBookAction = () => async (dispatch) => {
  const bookInfo = await adminFetchBookApi();
  console.log(bookInfo);
  const { status, payload } = bookInfo;
  console.log(payload);
  // dispatch book to redux store
  status === "success" && dispatch(setbook(payload));
  // console.log(response);
};
