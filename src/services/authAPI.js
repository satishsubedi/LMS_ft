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
  // const result = await apiProcessor(obj);
  // console.log(result);
  // return result;
  return apiProcessor(obj);
};
