import axios from "axios";
import { toast } from "react-toastify";
const getaccesstoken = () => {
  return sessionStorage.getItem("accesstoken");
};

export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivate,
}) => {
  try {
    const headers = {};
    if (isPrivate) {
      headers.authorization = "Bearer " + getaccesstoken();
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
    return {
      status: "error",
      message: msg,
    };
  }
};
