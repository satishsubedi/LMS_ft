import { apiProcessor } from "../../services/api";

// const apiBaseurl = "http://localhost:8000";
const apiBaseurl = import.meta.env.VITE_BASE_API_URL;
const bookApiEp = apiBaseurl + "/api/v1/books";
export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEp,
    method: "post",
    showToast: true,
    isPrivate: true,
    payload,
  };
  return apiProcessor(obj);
};

export const adminFetchBookApi = async () => {
  const obj = {
    url: bookApiEp + "/admin",
    method: "get",
    // showToast: true,
    isPrivate: true,
    // payload,
  };
  return apiProcessor(obj);
};

export const publicFetchBookApi = async () => {
  const obj = {
    url: bookApiEp,
    method: "get",
    // showToast: true,
    // isPrivate: true,
    // payload,
  };
  return apiProcessor(obj);
};

export const singleFetchBookApi = async (slug) => {
  const obj = {
    url: bookApiEp + "/public/" + slug,
    method: "get",
  };
  return apiProcessor(obj);
};

export const updateBookApi = async (payload) => {
  const obj = {
    url: bookApiEp,
    method: "put",
    showToast: true,
    isPrivate: true,
    payload,
  };
  return apiProcessor(obj);
};

export const deleteBookApi = async (_id) => {
  const obj = {
    url: bookApiEp + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivate: true,
  };
  return apiProcessor(obj);
};
