import axios from "axios";
import { toast } from "react-toastify";
import { fetchUserAction } from "../features/user/userAction";
import { fetchUserApi } from "../features/user/userApi";
import { fetchNewAccessJWTApi } from "./authAPI";
const getaccesstoken = () => {
  return sessionStorage.getItem("accesstoken");
};
const getrefreshtoken = () => {
  return localStorage.getItem("refreshtoken");
};

export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivate,
  isRefreshJWT,
}) => {
  try {
    const headers = {};

    if (isPrivate) {
      const token = isRefreshJWT ? getrefreshtoken() : getaccesstoken();
      headers.authorization = "Bearer " + token;
    }
    const responsePending = axios({
      url,
      method,
      data: payload,
      headers,
    });
    // console.log(response);

    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait..",
      });
    }
    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    console.log(error);
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);
    if (error.status === 401) {
      if (msg === "jwt expired") {
        //call api to access new accessjwt
        const { payload } = await fetchNewAccessJWTApi();
        if (payload) {
          sessionStorage.setItem("accesstoken", payload);
          return apiProcessor({
            url,
            method,
            payload,
            showToast,
            isPrivate,
            isRefreshJWT,
          });
        }
      } else {
        sessionStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
      }
    }
    return {
      status: "error",
      message: msg,
    };
  }
};
