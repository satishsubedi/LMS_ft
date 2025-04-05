import {
  adminFetchBookApi,
  postNewBookApi,
  publicFetchBookApi,
  singleFetchBookApi,
} from "./bookApi.js";
import { setbook, setpublicbook, setselectedbook } from "./bookSlice.js";

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

export const publicFetchBookAction = () => async (dispatch) => {
  const bookInfo = await publicFetchBookApi();
  console.log(bookInfo);
  const { status, payload } = bookInfo;
  console.log(payload);
  // dispatch book to redux store
  status === "success" && dispatch(setpublicbook(payload));
  // console.log(response);
};

export const publicFetchSingleBookAction = (slug) => async (dispatch) => {
  const bookInfo = await singleFetchBookApi(slug);
  console.log(bookInfo);
  const { status, payload } = bookInfo;
  console.log(payload);
  // dispatch book to redux store
  status === "success" && dispatch(setselectedbook(payload));
  // console.log(response);
};
