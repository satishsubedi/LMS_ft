import { apiProcessor } from "./api";

const apiBaseurl = "http://localhost:8000";
const authApiEp = apiBaseurl + "/api/v1/auth";
export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcessor(obj);
  console.log(result);
  return result;
};

export const verifyNewUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/activate-user",
    method: "post",
    payload,
    // showToast: true,
  };

  return apiProcessor(obj);
};

export const signInUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  // const result = await apiProcessor(obj);
  // console.log(result);
  // return result;
  return apiProcessor(obj);
};

export const fetchNewAccessJWTApi = async () => {
  const obj = {
    url: authApiEp + "/renew-jwt",
    method: "get",
    isPrivate: true,

    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};

export const logoutUserApi = async () => {
  const obj = {
    url: authApiEp + "/logout",
    method: "get",
    isPrivate: true,
  };
  return apiProcessor(obj);
};
